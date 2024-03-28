import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { FoodResponse } from "../Interfaces/food-data";
const URL_API = "http://localhost:8080"

const fetchData = async (): AxiosPromise<FoodResponse> => {
    const response = await axios.get<FoodResponse>(`${URL_API}/menu`);
    return response;
}

export function useFoodData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
    });
    return {
        ...query,
        data: query.data?.data
    };
}