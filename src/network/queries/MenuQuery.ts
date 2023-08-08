import { useMutation, useQuery } from "@tanstack/react-query";
import API from "../API";
import { QueryKey } from "./QueryKey";

export const useGetSidebarMenu = () => useQuery([QueryKey.SIDEBAR_MENU], () => API.getSidebarMenu());

export const useCreateMenu = () => useMutation(() => API.createMenu());
