import { AxiosError, AxiosResponse } from "axios";

export function responseSuccess(response: AxiosResponse<{ responseCode?: string }>) {
	const code = response.data.responseCode;
	if (code === "401" || code === "400") {
		handleUnAuth();
		return;
	}
	return response;
}

export const responseError = (error: AxiosError) => {
	const response = error.response;

	if (response && response.status.toString() === "401") {
		handleUnAuth();
		return;
	}

	return Promise.reject(error);
};

const handleUnAuth = () => {
	// const apiKey = getAPIKEY() as string | undefined;
	// void logout({ apikey: apiKey });
};
