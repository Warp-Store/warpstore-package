import { DomainError } from "@/core/errors"
import { Either } from "@/core/logic"
import { ProductsPaginationDto, ValidateProductsDto } from "./dtos"
import { RequestManager } from "@/lib"
import { WarpStore } from "@/main"

export class ProductsV1 {
    constructor() { }

    async getProducts({ ...input }: ProductsV1.GetProductsInput): Promise<ProductsV1.GetProductsOutput> {
        return await RequestManager.makeRequest<ProductsPaginationDto, DomainError>("/template/v1/products", {
            method: "GET",
            query: input,
            headers: {
                'store_id': WarpStore.storeId
            }
        })
    }

    async validateProducts(input: ProductsV1.ValidateProductsInput): Promise<ProductsV1.ValidateProductsOutput> {
        return await RequestManager.makeRequest<ValidateProductsDto, DomainError>("/template/v1/validate-products", {
            method: "POST",
            body: input,
            headers: {
                'store_id': WarpStore.storeId
            }
        })
    }
}

export namespace ProductsV1 {
    export type GetProductsInput = {
        categoryId: string
        limit?: number
        page?: number
    }

    export type GetProductsOutput = Either<DomainError, ProductsPaginationDto>

    export type ValidateProductsInput = {
        productsIds: string[]
    }

    export type ValidateProductsOutput = Either<DomainError, ValidateProductsDto>
}