import { GlobalFunctionTypes, ReturnApiResponse } from "@Types/globals";

const GlobalFunction: GlobalFunctionTypes = {
	sendSuccessResponse: function (request: any, response: any, data: any = {}, statusCode: number = 200, message: string = "") {
			response.status(statusCode).send({
			success: true,
			StatusMsg: message,
			ResponseType: "SUCCESS",
			data: data
		});
	},
	sendErrorResponse: function (request: any, response: any, data: any = {}, statusCode: number = 400, message: string = "") {
			response.status(statusCode).send({
			success: false,
			ResponseType: "ERROR",
			StatusMsg: message,
			data: data
		});
	},
	successResponse: function (request: any, response: any, data: any = {}, message: string = "", ) {
		response.status(200).send({
			success: true,
			StatusMsg: message,
			ResponseType: "SUCCESS",
			data: data
		});
	},
	errorResponse: function (request: any, response: any, statusCode: any = 400, message: string = "") {
		response.status(statusCode).send({
			success: false,
			ResponseType: "ERROR",
			StatusMsg: message
		});
	},
	customisedErrorResponse: function (request: any, response: any, type: any = "", message: any = "") {
		response.status(200).send({
			success: false,
			ResponseType: type,
			StatusMsg: message,
			Data: null
		});
	},
	sendResponse: function (promiseFunction: any, request: Request, response: Response) {
		promiseFunction.then((result: ReturnApiResponse) => {
			if (result.type) {
				this.customisedErrorResponse(request, response, result?.type, result?.message);
			} else {
				this.successResponse(request, response, result.data, result?.message);
			}

		}).catch((error: any) => {
				let e = {
					type: "",
					message: ""
				};
				try {
					e = JSON.parse(error.message);
					this.errorResponse(request, response, 400, e.message);
				} catch (er2: any) {
					e.type = error.name;
					e.message = error.message;
					this.errorResponse(request, response, 400, e.message);
				}
			});
	},
	paginate: function (page: number, pageSize: number) {
		const offset = page * pageSize;
		const limit = pageSize;
		return {
			offset,
			limit,
		};
	},
	currentTimeStamp: function( date: any = new Date()) {
		return APP.PLUGINS.moment(date).format("YYYY-MM-DDTHH:mm:ss.SSS");
	}
};
module.exports = GlobalFunction;