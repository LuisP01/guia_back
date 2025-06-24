import { createSgrPrintersClient } from "../config/sgrPrintersConfig.js";
import { deleteDiscountOrder, getSavedDiscount, getTagType, printDiscounts, validateDiscount } from "./sgrStorageSalesService.js";

export default class GrabacionRebajasService{
    async getTagType(args) {
        const printersClient  = await createSgrPrintersClient();
        const etiquetaData = await getTagType(printersClient);

        return {
            etiquetas: etiquetaData
        };
    }

    async getSavedDiscount(args) {
        const payload = args.body
        ? JSON.parse(args.body)
        : {};

        const printersClient = await createSgrPrintersClient();
        const etiquetaData = await getSavedDiscount(payload, printersClient);

        return {
            etiquetas: etiquetaData
        };
    }

    async deleteDiscountOrder(args) {
        const payload = args.body
        ? JSON.parse(args.body)
        : {};

        const printersClient = await createSgrPrintersClient();
        
        const etiquetaData = await deleteDiscountOrder(payload, printersClient);

        return {
            etiquetas: etiquetaData
        };
    }

    async printDiscounts(args){
        const payload = args.body
        ? JSON.parse(args.body)
        : {};
        const printersClient = await createSgrPrintersClient();
        const etiquetaData = await printDiscounts(payload, printersClient);

        return {
            etiquetas: etiquetaData
        };
    }

    async validateDiscount(args){
        const payload = args.body
        ? JSON.parse(args.body)
        : {};

        const printersClient = await createSgrPrintersClient();
        const etiquetaData = await validateDiscount(payload, printersClient);

        return{
            etiquetas: etiquetaData
        };
    }
}

