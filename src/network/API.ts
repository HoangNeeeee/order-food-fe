import { MenuItem, Response } from "@/model";
import Endpoint from "./Endpoint";
import ApiManager from "./APIManager";
import { AxiosRequestConfig } from "axios";

interface APIService {
	get<R>(url: string, params?: object, config?: AxiosRequestConfig): Promise<R>;
	post<R>(url: string, params: object, config?: AxiosRequestConfig): Promise<R>;
	put<R>(url: string, params: object, config?: AxiosRequestConfig): Promise<R>;
	delete<R>(url: string, params: object, config?: AxiosRequestConfig): Promise<R>;
}

class HTTPClient implements APIService {
	private instance: APIService;

	constructor(instance: APIService) {
		this.instance = instance;
	}

	get<R>(url: string, params?: object): Promise<R> {
		return this.instance.get(url, params);
	}
	post<R>(url: string, params: object, config?: AxiosRequestConfig): Promise<R> {
		return this.instance.post(url, params, config);
	}

	put<R>(url: string, params: object, config?: AxiosRequestConfig): Promise<R> {
		return this.instance.put(url, params, config);
	}
	delete<R>(url: string, params: object, config?: AxiosRequestConfig): Promise<R> {
		return this.instance.delete(url, params, config);
	}
}

class API {
	client: HTTPClient;
	publicClient: HTTPClient;

	constructor() {
		const apiBaseUrl = process.env.API_BASE_URL ?? "https://api-order.com/";

		const instance = ApiManager.getInstance(apiBaseUrl);
		this.client = new HTTPClient(instance);

		const publicInstance = ApiManager.getInstance(apiBaseUrl, false);
		this.publicClient = new HTTPClient(publicInstance);
	}

	login = (params: unknown): Promise<Response<unknown>> => {
		return this.publicClient.post<Response<unknown>>(Endpoint.LOGIN, {});
	};

	getFoodMenu = (): Promise<Response<MenuItem[]>> => {
		return this.publicClient.post<Response<MenuItem[]>>(Endpoint.FOOD_MENU, {});
	};
}

export default new API();
