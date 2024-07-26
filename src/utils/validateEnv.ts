import { cleanEnv, port, str } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    MONGODB_URI: str()

    // DB_HOST: str(),
    // DB_NAME: str(),
    // DB_USER: str(),
    // DB_PORT: port(),
    // DB_PASSWORD: str(),
    // JWT_SECRET_TOKEN: str()
  });
}

export default validateEnv;
