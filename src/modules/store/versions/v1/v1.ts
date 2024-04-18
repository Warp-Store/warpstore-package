import { Either, failure } from "@/core/logic"
import { validateIp } from "@/core/validators"
import { GetStoreInfoError } from "./errors"
import { RequestManager } from "@/lib"
import { StoreInfoDto } from "./dto"

export class StoreV1 {
    async getInfo(input: StoreV1.GetStoreInfoInput): Promise<StoreV1.GetStoreInfoOutput> {
        const { clientInfo, ...props } = input

        if (clientInfo) {
            if (!validateIp(clientInfo?.ip)) return failure(new GetStoreInfoError("InvalidIpError"))
            if (typeof clientInfo?.userAgent !== "string") return failure(new GetStoreInfoError("InvalidUserAgent"))
        }

        return await RequestManager.makeRequest<StoreInfoDto, GetStoreInfoError>("/template/v1/store-info", {
            method: "GET",
            query: props,
            headers: clientInfo ? {
                "cf-connecting-ip": clientInfo?.ip,
                "user-agent": clientInfo?.userAgent
            } : undefined
        })
    }
}

export namespace StoreV1 {
    export type GetStoreInfoInput = {
        subDomain?: string
        domain?: string
        clientInfo?: {
            ip: string
            userAgent: string
        }
    }

    export type GetStoreInfoOutput = Either<GetStoreInfoError, StoreInfoDto>
}