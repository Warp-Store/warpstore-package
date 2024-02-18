import { DomainError } from "@/core/errors"
import { Either, failure, success } from "@/core/logic"
import { ProductInfoDto, StoreInfoDto, ValidateProductsDto } from "./dtos"
import { RequestManager } from "@/lib"
import { GetStoreInfoError } from "./errors/errors"
import { WarpStore } from "@/main"
import { validateIp } from "@/core/validators"


export class TemplateV1 {

    async getStoreInfo(input: TemplateV1.GetStoreInfoInputDto = {} as any): Promise<Either<GetStoreInfoError, StoreInfoDto>>{
        const { clientInfo, ...props } = input

        if(clientInfo) {
            if(!validateIp(clientInfo?.ip)) return failure(new GetStoreInfoError("InvalidIpError"))
            if(typeof clientInfo?.userAgent !== "string") return failure(new GetStoreInfoError("InvalidUserAgent"))
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

    async getProducts(input: TemplateV1.GetProductsInputDto): Promise<Either<DomainError, ProductInfoDto>>{
        return await RequestManager.makeRequest<ProductInfoDto, DomainError>("/template/v1/products", {
            method: "GET",
            query: input
        })
    }

    async validateProducts(input: { productsIds: string[] }): Promise<Either<DomainError, ValidateProductsDto>>{
        return await RequestManager.makeRequest<ValidateProductsDto, DomainError>("/template/v1/validate-products", {
            method: "POST",
            body: input
        })
    }
}


export namespace TemplateV1 {

    export type GetProductsInputDto = {
        categoryId: string
        limit?: number
        page?: number
    }

    export type GetStoreInfoInputDto = {
        subDomain?: string
        domain?: string
        clientInfo?: {
            ip: string
            userAgent: string
        }
    }
}