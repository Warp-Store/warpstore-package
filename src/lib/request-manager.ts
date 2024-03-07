import { CustomDomainError, DomainError } from "@/core/errors";
import { Either, failure, success } from "@/core/logic";
import { WarpStore } from "@/main";

export class RequestManager {

    static async makeRequest<TResponse, TError,>(path: string, httpInput: RequestManager.HttpInput = {} as any): Promise<Either<TError, TResponse>> {

        const { body, headers, query, method } = httpInput

        const url = new URL(WarpStore.apiUrl + path)

        if (query) {
            Object.keys(query).forEach(key => {
                const value: any = query
                url.searchParams.append(key, value[key])
            })
        }

        const fetchResponse = await fetch(url.toString(), {
            method: method ?? "GET",
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            body: JSON.stringify(body)
        })

        const response = await fetchResponse.json()

        if (fetchResponse.status !== 200) {
            return failure(new CustomDomainError(response?.error?.name, response?.error)) as any
        }

        return success(response) as any
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