export async function getTagType(axiosClient) {
    const url = `/discount/processes/labelType`;
    try{
        const respose = await axiosClient.get(url);
        return respose.data;
    }catch(error){
        const errorText = error?.response?.data || error.message;
        throw new Error(`Error al llamar a ${url}: ${error.response?.status} - ${JSON.stringify(errorText)}`);
    }
}


export async function getSavedDiscount(payload, axiosClient) {
    const url = `/discount/processes/SgrSaveData`;
    try{
        const response = await axiosClient.post(url, payload); 
        return response.data;
    }catch(error){
        const errorText = error?.response?.data || error.message;
        throw new Error(`Error al llamar a ${url}: ${error.response?.status} - ${JSON.stringify(errorText)}`);
    }
}

export async function deleteDiscountOrder (payload, axiosClient) {
    const url = `/discount/processes/SgrInactivateData`;
    try{
    const response = await axiosClient.post(url, payload);
    return response.data;
    }catch(error) {
        const errorText = error?.response?.data || error.message;
        throw new Error(`Error al llamar a ${url}: ${error.response?.status} - ${JSON.stringify(errorText)}`);
    }
}

export async function printDiscounts (payload, axiosClient){
    const url = `/discount/processes/SgrDiscountPrint`;
    try{
        const response = await axiosClient.post(url, payload);
        return response.data;
    }catch(error){
        const errorText = error?.response?.data || error.message;
        throw new Error(`Error al llamar a ${url}: ${error.response?.status} - ${JSON.stringify(errorText)}`);
    }   
}

export async function validateDiscount(payload, axiosClient) {
    const url = `/discount/processes/SgrDiscountValidateItem`;
    try {
        const response = await axiosClient.post(url, payload);
        return response.data;
    } catch (error) {
        const errorText = error?.response?.data || error.message;
        throw new Error(`Error al llamar a ${url}: ${error.response?.status} - ${JSON.stringify(errorText)}`);
    }
}
