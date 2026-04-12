export interface IApiResponse<T = any> {
    success: boolean;
    message: string;
    data: T;
    errors: string[];
    meta: Record<string, any>;
    pageCode?: number;
}