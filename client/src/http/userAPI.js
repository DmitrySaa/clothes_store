import { jwtDecode } from "jwt-decode";
import { $host, $authHost } from "./index";

export const registration = async (email, password) => {
    const { data } = await $host.post('api/user/registration', { email, password, role: 'USER' });
    localStorage.setItem('token', data)
    const decodedToken = jwtDecode(data); // Извлекаем токен и декодируем
    return decodedToken;
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token)
    const decodedToken = jwtDecode(data.token);
    return decodedToken;
}

export const check = async () => {
    const { data } = await $authHost.get('api/user/auth');
    //console.log(data)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token);
}