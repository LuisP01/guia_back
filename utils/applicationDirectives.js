import ErrorCodes from "../exception/ErrorCodes.js";
import ServiceError from "../exception/ServiceError.js";

export default class ApplicationDirectives {
    constructor () {}
    static facade(){
        let serviceFacade = null;
        serviceFacade = new GrabacionRebajasFacade();
        return serviceFacade;
    }
    static createRequestPayload(
    httpMethod = "GET",
    awsRequestId,
    params = {},
    authorization = "",
    headers = {},
    body = {},
  ) {
    let inputData = {};
    let reqBody = {};
    if (body) {
      try {
        reqBody = JSON.parse(body);
      } catch (error) {
        reqBody = body;
      }
    }

    // Handle different HTTP methods
    switch (httpMethod) {
      case "GET":
        inputData = {
          method: httpMethod,
          params: params || {},
          authorization: authorization,
          requestId: awsRequestId,
        };
        break;

      case "POST":
        inputData = {
          method: httpMethod,
          params: params || {},
          body: reqBody,
          authorization: authorization,
          requestId: awsRequestId,
          headers,
        };
        break;

      case "PUT":
        inputData = {
          method: httpMethod,
          params: params || {},
          body: reqBody,
          authorization: authorization,
          requestId: awsRequestId,
          headers,
        };
        break;

      default:
        throw new ServiceError(ErrorCodes.BAD_REQUEST);
    }
    return inputData;
  }

  static customResponseType(resData) {
    //Customize the response according to its type (normal response, redirection, XML,etc)
    if (resData.download && resData.success) {
      return {
        statusCode: resData.success ? 200 : resData.code,
        headers: resData.headers || {},
        body: resData.data,
        isBase64Encoded: true,
      };
    }
    if (resData.redirect && resData.success) {
      return {
        statusCode: resData.success ? 302 : 400,
        headers: resData.headers || {},
        body: "",
      };
    }
    if (resData.isXML && resData.success) {
      return {
        statusCode: resData.success ? 200 : 400,
        headers: { "Content-Type": "application/xml" },
        body: resData.data,
      };
    }
    const reponseCode = resData.statusCode;

    delete resData.statusCode;
    delete resData.isXML;
    delete resData.redirect;
    delete resData.download;
    delete resData.headers;

    return {
      statusCode: resData.success ? 200 : reponseCode,
      headers: resData.headers || {},
      body: JSON.stringify(resData),
    };
  }

  static validateRequestParams(reqParams, validParams) {
    if (Object.keys(reqParams).length != validParams.length) {
      throw new ServiceError(ErrorCodes.BAD_REQUEST_FOR_PARAMS);
    }
    for (const paramKey of validParams) {
      if (!reqParams.hasOwnProperty(paramKey)) {
        throw new ServiceError(ErrorCodes.BAD_REQUEST_FOR_PARAMS);
      }
    }
    return true;
  }

  static validateRequestParams(reqParams, validParams) {
    if (Object.keys(reqParams).length != validParams.length) {
      throw new ServiceError(ErrorCodes.BAD_REQUEST_FOR_PARAMS);
    }
    for (const paramKey of validParams) {
      if (!reqParams.hasOwnProperty(paramKey)) {
        throw new ServiceError(ErrorCodes.BAD_REQUEST_FOR_PARAMS);
      }
    }
    return true;
  }
}