export interface Response<T> {
    success: boolean,
    body?: T,
    error?: string,
    message?: string
}