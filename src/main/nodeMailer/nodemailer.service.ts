import nodemailer from "nodemailer";
import { NODE_MAILER_CRED } from "../../constant_temp/nodeMailer.constant";


export async function sendMail(to: any, subject: any, text: any, html: any= "") {
    //const testAccount = await nodemailer.createTestAccount();
    const createTransporter = async () => {

        const transporter = nodemailer.createTransport({ 
            service: "gmail", scope: "https://mail.google.com",
            host: "smtp.ethereal.email",
            port: 25,
            secure: false, // true for 465, false for other ports
            auth: {
                user: NODE_MAILER_CRED.NODEMAILER_EMAILID, // generated ethereal user
                pass: NODE_MAILER_CRED.NODEMAILER_PASSWORD, // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        try {
            return transporter;
        } catch (error) {
            console.log("Create Transport Error: ", error);
        }
    };

    const sendEmail = async (emailOptions: any) => {
        try {
            const emailTransporter = await createTransporter(); 
            const response = await emailTransporter
                .sendMail(emailOptions)
                .catch((err: any) => console.log("Email Transport Err: ", err));

            return response;
        } catch (error) {
            console.log("Email Transport Error: ", error);
        }
    };

    try {
        const response = await sendEmail({

        from: NODE_MAILER_CRED.NODEMAILER_EMAILID, // sender address
        to: "bhartimishra1993@gmail.com", // list of receivers
        subject: subject || "", // Subject line
        //text: text || "", // plain text body
        html: html || "", // html body,
        attachments: [{
            // filename: "Certificate.pdf",
            // path: attachment
        }]

        }).catch((err) => console.log("Send Email Err", err));
        return response;
    } catch (error: any) {
        console.log("Send Email Error: ", error);
        throw error;
    }

}

