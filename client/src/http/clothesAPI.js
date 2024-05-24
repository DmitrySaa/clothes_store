import { jwtDecode } from "jwt-decode";
import { $host, $authHost } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type);
    return data;
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type');
    return data;
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand);
    return data;
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand');
    return data;
}

export const createClothe = async (clothe) => {
    const { data } = await $authHost.post('api/clothes', clothe);
    return data;
}

export const fetchClothes = async (typeId, brandId, page, limit = 5) => {
    const { data } = await $host.get('api/clothes', {params: {
        typeId, brandId, page, limit
    }});
    return data;
}

export const fetchOneClothe = async (id) => {
    const { data } = await $host.get('api/clothes/' + id);
    return data;
}
