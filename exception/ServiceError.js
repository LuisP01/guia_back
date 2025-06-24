import ErrorCodes from "./ErrorCodes.js";

export default class ServiceError extends Error{
    constructor(errorCode ={}, message = null){
        let msg = null;
        let statusCode = null;
        let status = null;

        let error = ErrorCodes.SERVER_ERROR;

        if (Object.keys(errorCode).length != 0) {
            error = errorCode;
        }

        msg = error.message;
        statusCode = error.statusCode;
        status = error.status;

        if (message != null) {
            msg = message
        }

        super(msg);
        this.statusCode = statusCode;
        this.status = status;
    }
}