import axios, { AxiosRequestConfig } from "axios";
import * as TransformInterceptor from "./interceptors/Transform";
import * as AccessTokenInterceptor from "./interceptors/AccessToken";
import * as AuthInterceptor from "./interceptors/Auth";

const getInstance = (baseURL: string, withToken = true) => {
	const instance = axios.create({
		baseURL: baseURL,
		timeout: 60000,
		withCredentials: false,
		headers: {
			"Content-Type": "application/json;charset=utf-8",
			Accept: "*/*",
			"Access-Control-Allow-Origin": "*",
		},
	});

	instance.interceptors.response.use(AuthInterceptor.responseSuccess, AuthInterceptor.responseError);

	if (withToken) {
		instance.interceptors.request.use((config: AxiosRequestConfig<{ apikey?: string | undefined }>) => {
			return AccessTokenInterceptor.addExtraInfo(config);
		}, AccessTokenInterceptor.onRejected);
	}

	instance.interceptors.response.use((res) => {
		return TransformInterceptor.transformResponse(res);
	}, TransformInterceptor.transformError);

	return instance;
};

const ApiManager = {
	getInstance: (baseUrl: string, withToken = true) => {
		const axiosInstance = getInstance(baseUrl, withToken);
		return axiosInstance;
	},
};

export default ApiManager;
