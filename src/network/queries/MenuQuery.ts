import { useQuery } from "@tanstack/react-query";
import API from "../API";
import { QueryKey } from "./QueryKey";

export const useGetFoodMenu = () => useQuery([QueryKey.FOOD_MENU], () => API.getFoodMenu());
