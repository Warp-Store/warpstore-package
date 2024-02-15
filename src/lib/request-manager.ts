import { CustomDomainError, DomainError } from "@/core/errors";
import { Either, failure, success } from "@/core/logic";
import axios, { AxiosResponse } from "axios"

const api = axios.create({
    baseURL: 'https://api.warpstore.app',
    timeout: 1000,
    validateStatus: () => true
})

export class RequestManager {

    static async makeRequest<TResponse, TError,>(path: string, httpInput: RequestManager.HttpInput = {} as any): Promise<Either<TError, TResponse>> {
        const { body, headers, query, method } = httpInput

        let response: AxiosResponse

        if (method === "POST") {
            response = await api.post(path, body, {
                headers,
                params: query
            })
        } else {
            response = await api.get(path, {
                headers,
                params: query
            })
        }

        if (response.status !== 200) {
            return failure(new CustomDomainError(response.data?.error?.name)) as any
        }

        return success(response.data) as any
    }

}

export namespace RequestManager {


    export type HttpInput = {
        method: "GET" | "POST"
        body?: object
        headers?: object
        query?: object
    }
}