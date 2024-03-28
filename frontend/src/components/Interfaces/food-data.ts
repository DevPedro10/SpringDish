export interface FoodData {
    id: number;
    title: string;
    price: number;
    image: string;
}

export interface FoodResponse {
    data: FoodData[];
}