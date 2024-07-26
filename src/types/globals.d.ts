export interface GlobalFunctionTypes {
    sendSuccessResponse: (req: any, res: any, data?: any, statusCode?: number, message?: string) => void;
    sendErrorResponse: (req: any, res: any, data?: any, statusCode?: number, message?: string) => void;
    successResponse: (req: any, res: any, data?: any, message?: string) => void;
    errorResponse: (req: any, res: any, statusCode?: number, message?: string) => void;
    customisedErrorResponse: (req: any, res: any, type?: any, message?: any) => void;
    paginate: (page: number, pageSize: number) => { offset: number, limit: number };
    // HashPassword: (password: any) => password;
    currentTimeStamp: (date?: any) => date;
    sendResponse: (promiseFunction: any, request: any, response: any) => void;
}

export interface GlobalErrorMessageTypes {
    MOBILE_NOT_VERIIED: string;
    UNAUTHORIZED: string;
    USER_NOT_FOUND: string;
    INVALID_EMAIL: string;
    INVALID_PASSWORD: string;
    INCORRECT_PASSWORD: string;
    AUTH_TOKEN_NOT_RECEIVED: string;
    INVALID_TOKEN: string;
    FNAME_NOT_FOUND: string;
    LNAME_NOT_FOUND: string;
    REGISTERED_NOT_FOUND: string;
    REGISTERED_DEVICE_NOT_FOUND: string;
    USER_ALREADY_REGISTERED: string;
    EMAIL_NOT_VERIFIED: string;
    SUBJECT_NOT_FOUND: string;
    DATA_NOT_FOUND: string;
    DOB_NOT_FOUND: string;
    PHONE_NOT_FOUND: string;
    PHONE_EXIST: string;
    CLASS_ID_NOT_FOUND: string;
    SUB_ID_NOT_FOUND: string;
    CURRENT_PWD_NOT_FOUND: string;
    NEW_PWD_NOT_FOUND: string;
    CURRENT_PWD_INCORECT: string;
    SAME_PASSWORD: string;
    OFFICIALEMAILID_IS_NOT_DIFFERENT_FROM_EMAILID: string
}

export interface GlobalSuccessMessageTypes {
    LOGIN_SUCCESS: string;
    PASSWORD_CHANGED: string;
    USER_REGISTERED: string;
    EMAIL_SENT: string;
    USER_UPDATED: string;
}

export interface GlobalSuccessTypes {
    USER_NOT_FOUND: string;
    INVALID_EMAIL: string;
    INVALID_PASSWORD: string;
    INCORRECT_PASSWORD: string;
    AUTH_TOKEN_NOT_RECEIVED: string;
    INVALID_TOKEN: string;
    PASSWORD_CHANGED: string;
    FNAME_NOT_FOUND: string;
    LNAME_NOT_FOUND: string;
    EMAIL_NOT_FOUND: string;
    PASSWORD_NOT_FOUND: string;
    REGISTERED_NOT_FOUND: string;
    REGISTERED_DEVICE_NOT_FOUND: string;
    USER_ALREADY_REGISTERED: string;
    USER_REGISTERED: string;
    EMAIL_SENT: string;
    SUBJECT_NOT_FOUND: string;
    DATA_NOT_FOUND: string;
    DOB_NOT_FOUND: string;
    PHONE_NOT_FOUND: string;
    USER_UPDATED: string;
    PHONE_EXIST: string;
    CLASS_ID_MISSING: string;
    SUB_ID_NOT_FOUND: string;
    PASSWORD_NOT_MATCHED: string;
    SAME_PASSWORD: string;
    EMAIL_NOT_VERIFIED : string;
    OFFICIALEMAILID_IS_NOT_DIFFERENT_FROM_EMAILID: string
}

export interface GlobalMessageTypes {
    ERROR: GlobalErrorMessageTypes,
    SUCCESS: GlobalSuccessMessageTypes,
    SUCCESS_TYPE: GlobalSuccessTypes
}

export interface GlobalTypes {
    FN: GlobalFunctionTypes,
    MESSAGE: GlobalMessageTypes
}

export interface ReturnApiResponse {
    data?: any,
    message?: string,
    statusCode?: number,
    type?: string
}