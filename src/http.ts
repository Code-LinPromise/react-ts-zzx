import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
type GetConfig = Omit<AxiosRequestConfig, 'params' | 'url' | 'method'>
type PostConfig = Omit<AxiosRequestConfig, 'url' | 'data' | 'method'>
type PatchConfig = Omit<AxiosRequestConfig, 'url' | 'data'>
type DeleteConfig = Omit<AxiosRequestConfig, 'params'>


// @ts-ignore
type JSONValue =
    | null
    | boolean
    | string
    | number
    | JSONValue[]
    | Record<string, JSONValue>;

export class Http {
    instance: AxiosInstance
    constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL
        })
    }
    get<R = unknown>(url: string, query?: Record<string, JSONValue>, config?: GetConfig) {
        return this.instance.request<R>({ ...config, url: url, params: query, method: 'get' })
    }
    post<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PostConfig) {
        return this.instance.request<R>({ ...config, url, data, method: 'post' })
    }
    patch<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PatchConfig) {
        return this.instance.request<R>({ ...config, url, data, method: 'patch' })
    }
    delete<R = unknown>(url: string, query?: Record<string, string>, config?: DeleteConfig) {
        return this.instance.request<R>({ ...config, url: url, params: query, method: 'delete' })
    }
}

export const http = new Http("http://127.0.0.1:3000/")
