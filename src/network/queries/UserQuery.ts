import { useMutation, useQuery } from "@tanstack/react-query";
import API from "@/network/API";

export const useLogin = () => useMutation((params: unknown) => API.login(params));
