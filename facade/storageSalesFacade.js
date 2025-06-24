import GrabacionRebajasController from "../controllers/StorageSalesController.js";
import ErrorCodes from "../exception/ErrorCodes.js";
import ServiceError from "../exception/ServiceError.js";

export default class GrabacionRebajasFacade{
    constructor(){
        this.controller = new GrabacionRebajasController();
    }

    async runAction(action, args){
        let result;
        switch(true){
            case /^tag-type/.test(action) && args.method === "GET":
                result = await this.controller.getTagType(args);
                break;

            case /^save-discount/.test(action) && args.method == "POST":
                result = await this.controller.getSavedDiscount(args);
                break;
            
            case/^delete-discount/.test(action) && args.method == "POST":
                result = await this.controller.deleteDiscountOrder(args);
                break;
            
            case/^print-discount/.test(action) && args.method == "POST":
                result = await this.controller.printDiscounts(args);
                break;

            case/^validate-discount/.test(action) && args.method == "POST":
                result = await this.controller.validateDiscount(args);
                break;

            default:
            console.warn("Unexistent or invalid action");
            throw new ServiceError(ErrorCodes.SERVICE_NOT_FOUND);
        }

        return result;
    }
}