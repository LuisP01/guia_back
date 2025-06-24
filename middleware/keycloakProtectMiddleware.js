import Keycloak from "keycloak-connect";
import 'dotenv/config';
import HttpError from "../error/httpError.js";

const { EC_KEYCLOAK_REALM, EC_KEYCLOAK_SERVER_URL, EC_KEYCLOAK_RESOURCE, EC_KEYCLOAK_SECRET } =
  process.env;

const keycloak = new Keycloak(
  {},
  {
    realm: EC_KEYCLOAK_REALM,
    "auth-server-url": EC_KEYCLOAK_SERVER_URL,
    "ssl-required": "external",
    resource: EC_KEYCLOAK_RESOURCE,
    "bearer-only": true,
    credentials: {
      secret: EC_KEYCLOAK_SECRET,
    },
  }
);

const AUTH_TOKEN_PREFIX = "Bearer ";

export const keycloakProtectMiddleware = () => {
  return {
    before: async (handler) => {
      const headers = handler.event.headers || {};
      const authHeader = headers.Authorization || headers.authorization;

      if (!authHeader || !authHeader.startsWith(AUTH_TOKEN_PREFIX)) {
        throw new HttpError("Token faltante o inválido", 401, "KEYCLOAK_001");
      }

      const token = authHeader.split(" ")[1];

      try {
        const isValid = await keycloak.grantManager.validateAccessToken(token);
        if (!isValid) {
          throw new HttpError("Token no válido", 401, "KEYCLOAK_002");
        }

        const grant = await keycloak.grantManager.createGrant({ access_token: token });
        handler.event.user = grant.access_token.content;
      } catch (error) {
        console.error("Keycloak token error:", error.message);
        throw new HttpError("Token inválido o expirado", 401, "KEYCLOAK_003");
      }
    },
  };
};
