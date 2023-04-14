import { urlFetch } from '../constants';

export const getData = async (user) => {
    try {
        const res = await fetch(`${urlFetch}${user}`);
        const data = await res.json();
        if (!res.ok) {
            throw new Error("Error en la peticion");
        }


        return data;
    } catch (err) {
        console.error(err);
        return 'Error';
    }
};
