import axios, { AxiosPromise } from "axios";
import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import { FoodData, FoodResponse } from "../Interfaces/food-data";
const URL_API = "http://localhost:8080"

const registerNewFood = async (data: FoodData): AxiosPromise<FoodResponse> => {
    return await axios.post<FoodResponse>(`${URL_API}/menu/registerFood`, data);

}

export function useFoodMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: registerNewFood,
        onSuccess: () => queryClient.invalidateQueries(['food-data'] as InvalidateQueryFilters),
    });
    return mutate;
}