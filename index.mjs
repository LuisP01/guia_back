import { logMiddlewareForServerless } from "@gdn/logging-middleware-lib";
import GrabacionRebajasFacade from "./facade/storageSalesFacade.js";
import middy from "@middy/core";
import { keycloakProtectMiddleware } from "./middleware/keycloakProtectMiddleware.js";

const handlerFunction = async (event, context) =>{
    console.log("Event:", event);

    const facade = new GrabacionRebajasFacade();
    const fullPath = event.path || "";
    const pathParts = fullPath.split("/");
    const action = pathParts[pathParts.length - 1];

    try{
        const response = await facade.runAction(
            action,
            {
                params: event.queryStringParameters,
                method: event.httpMethod,
                body: event.body,
                headers: event.headers,
                user: event.user
            },
        );
        
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        }
    }catch(error){
        console.error("✖ Error en handlerFunction:", error.message);
        return {
            statusCode: 500,
            body:  JSON.stringify({ error: error.message }),
        };
    }
};

export const handler = middy(handlerFunction).use(keycloakProtectMiddleware()).use(logMiddlewareForServerless());