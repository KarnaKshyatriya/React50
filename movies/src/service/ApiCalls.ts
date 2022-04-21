import axios from "axios";
import IDataList from "../models/IDataList";

const getDataFromServer = async (section : string) => {

    let url =  `http://localhost:3000/${section}`;

        const response = await axios.get<IDataList[]>(url);
    return response.data;
}

const addToFavourites = (movieData: Omit<IDataList, "id">) => {
    return axios.post<IDataList>(`http://localhost:3000/favourite`, movieData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

const removeFromFavourites = (id : string | number) => {
    return axios.delete<IDataList>(`http://localhost:3000/favourite/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

export { getDataFromServer, addToFavourites, removeFromFavourites };