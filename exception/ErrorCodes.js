export const ErrorCodes = {
    SUCCESS: {
    statusCode: 200,
    status: "200",
    message: "OK",
  },
  BAD_REQUEST: {
    statusCode: 400,
    status: "400",
    message: "Solicitud incorrecta",
  },
  BAD_REQUEST_FOR_PARAMS: {
    statusCode: 400,
    status: "400",
    message: "Solicitud incorrecta debido a parametros invalidos",
  },
  NOT_FOUND: {
    statusCode: 404,
    status: "404",
    message: "Recurso no encontrado",
  },
  SERVICE_NOT_FOUND: {
    statusCode: 404,
    status: "404",
    message: "Servicio invalido o inexistente",
  },
  SERVER_ERROR: {
    statusCode: 500,
    status: "500",
    message: "Error",
  },
  REGION_INCORRECT: {
    statusCode: 400,
    status: "4001",
    message: "Región incorrecta",
  },
  FACADE_INCORRECT: {
    statusCode: 400,
    status: "4002",
    message: "Fachada no valida",
  },
  TOKEN_INCORRECT: {
    statusCode: 400,
    status: "4003",
    message: "Error al validar token gdn",
  },
  UNAUTHORIZED: {
    statusCode: 401,
    status: "4004",
    message: "Acceso denegado",
  },
}

export default ErrorCodes;