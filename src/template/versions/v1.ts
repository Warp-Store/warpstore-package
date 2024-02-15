import { DomainError } from "@/core/errors"
import { Either, success } from "@/core/logic"
import { ProductInfoDto, StoreThemeDto } from "./dtos"
import { RequestManager } from "@/lib"
import { GetStoreInfoError } from "./errors/errors"
import { WarpStore } from "@/main"

export class TemplateV1 {


    async getStoreInfo(input: TemplateV1.GetStoreInfoInputDto): Promise<Either<GetStoreInfoError, StoreThemeDto>>{
        return await RequestManager.makeRequest<StoreThemeDto, GetStoreInfoError>("/template/v1/store-info", {
            method: "GET",
            query: input
        })
    }

    async getProducts(input: TemplateV1.GetProductsInputDto): Promise<Either<DomainError, ProductInfoDto>>{
        return await RequestManager.makeRequest<ProductInfoDto, DomainError>("/template/v1/products", {
            method: "GET",
            query: input
        })
    }
}


export namespace TemplateV1 {

    export type GetProductsInputDto = {
        categoryId: string
        limit?: number
        skip?: number
    }

    export type GetStoreInfoInputDto = {
        subDomain?: string
        domain?: string
    }
}