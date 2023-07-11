import { AxiosError, AxiosRequestConfig } from "axios";

export function addExtraInfo(config: AxiosRequestConfig<{ apikey?: string | undefined }>, encrypt = false) {
	const token = "token";

	config.data = {
		...config.data,
		apikey: token,
	};

	return config;
}

export function onRejected(error: AxiosError) {
	return Promise.reject(error);
}
