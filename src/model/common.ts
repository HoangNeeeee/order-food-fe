export interface Response<T> {
	responseData?: T;
	error?: ErrorResponse;
	statusCode?: number;
	message?: string | 'sucess' | 'fail';
}

export interface ErrorResponse {
	code?: number;
	message?: string;
}

export type TextFieldValue = string | undefined;
