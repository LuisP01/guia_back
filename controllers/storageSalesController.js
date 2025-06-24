
import GrabacionRebajasService from "../services/storageSalesService.js";
import MessageUtils from "../utils/MessageUtils.js";
import methodResponseFormat from "../utils/methodresponseFormat.js";

export default class GrabacionRebajasController {
    constructor(){
        this.service = new GrabacionRebajasService();
    }

    async getTagType(args){
        const response = methodResponseFormat();
        try{
            const data = await this.service.getTagType(args);
            response.success = true;
            response.data = data;
            response.code = "GRR_001";
            response.message = MessageUtils.getMessage("GRR_001");
        }catch(err){
            console.warn("Error en controller:", err.message);
            response.success = false;
            response.error = err;
            response.code = err.errorCode;
            response.message = MessageUtils.getMessage(err.errorCode);
        }

        return response;
    }

    async getSavedDiscount(args){
        const response = methodResponseFormat();
        try{
            const data = await this.service.getSavedDiscount(args);
            response.success = true;
            response.data = data;
            response.code = "GRR_001";
            response.message = MessageUtils.getMessage("GRR_001");
        }catch(err){
            console.warn("Error en controller:", err.message);
            response.success = false;
            response.error = err;
            response.code = err.errorCode;
            response.message = MessageUtils.getMessage(err.errorCode);
        }

        return response;
    }

    async deleteDiscountOrder(args){
        const response = methodResponseFormat();
        try{
            const data = await this.service.deleteDiscountOrder(args);
            response.success = true;
            response.data = data;
            response.code = "GRR_001";
            response.message = MessageUtils.getMessage("GRR_001");
        }catch(err){
            console.warn("Error en controller:", err.message);
            response.success = false;
            response.error = err;
            response.code = err.errorCode;
            response.message = MessageUtils.getMessage(err.errorCode);
        }
        return response;
    }

    async printDiscounts(args){
        const response = methodResponseFormat();
        try{
            const data = await this.service.printDiscounts(args);
            response.success = true;
            response.data = data;
            response.code = "GRR_001";
            response.message = MessageUtils.getMessage("GRR_001");
        }catch(err){
            console.warn("Error en controller:", err.message);
            response.success = false;
            response.error = err;
            response.code = err.errorCode;
            response.message = MessageUtils.getMessage(err.errorCode);
        }
        return response;
    }

    async validateDiscount(args){
        const response = methodResponseFormat();
        try{
            const data = await this.service.validateDiscount(args);
            response.success = true;
            response.data = data;
            response.code = "GRR_001";
            response.message = MessageUtils.getMessage("GRR_001");
        }catch(err){
            console.warn("Error en controller:", err.message);
            response.success = false;
            response.error = err;
            response.code = err.errorCode;
            response.message = MessageUtils.getMessage(err.errorCode);
        }
        return response;
    }
}