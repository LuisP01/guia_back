export default class HttpError extends Error {
  constructor(message, statusCode, errorCode = null) {
    super(message);

    this.name = this.constructor.name;

    this.statusCode = statusCode;

    this.errorCode = errorCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

