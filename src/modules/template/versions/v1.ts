import { DomainError } from "@/core/errors"
import { Either, failure, success } from "@/core/logic"
import { CouponDto, DiscordUserDto, ProductInfoDto, StoreInfoDto, ValidateProductsDto } from "./dtos"
import { RequestManager } from "@/lib"
import { GetStoreInfoError, ValidateCouponError } from "./errors/errors"
import { WarpStore } from "@/main"
import { validateIp } from "@/core/validators"


export class TemplateV1 {

    discordLogin: DiscordLogin = new DiscordLogin()
    coupon: Coupon = new Coupon()
    store: Store = new Store()
    product: Product = new Product()

}

class Store {
    async getInfo(input: TemplateV1.GetStoreInfoInputDto = {} as any): Promise<Either<GetStoreInfoError, StoreInfoDto>> {
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

class Product {
    async getProducts({ storeId, ...input }: TemplateV1.GetProductsInputDto & { storeId: string }): Promise<Either<DomainError, ProductInfoDto>> {
        return await RequestManager.makeRequest<ProductInfoDto, DomainError>("/template/v1/products", {
            method: "GET",
            query: input,
            headers: {
                'store_id': storeId
            }
        })
    }

    async validateProducts(input: { productsIds: string[] }): Promise<Either<DomainError, ValidateProductsDto>> {
        return await RequestManager.makeRequest<ValidateProductsDto, DomainError>("/template/v1/validate-products", {
            method: "POST",
            body: input
        })
    }

}

class DiscordLogin {

    async getLoginUrl(input: { storeId: string }): Promise<Either<DomainError, { url: string }>> {
        return await RequestManager.makeRequest<{ url: string }, DomainError>("/template/v1/discord-login-url", {
            method: "GET",
            query: input
        })
    }

    async changeCodeForToken(input: { code: string, storeId: string }): Promise<Either<DomainError, { accessToken: string }>> {
        return await RequestManager.makeRequest<{ accessToken: string }, DomainError>("/template/v1/discord-login/change-code-for-token", {
            method: "GET",
            query: input
        })
    }

    async getCurrentUser(input: { accessToken: string, storeId: string }): Promise<Either<DomainError, DiscordUserDto>> {
        return await RequestManager.makeRequest<DiscordUserDto, DomainError>("/template/v1/discord-login/current-user", {
            method: "GET",
            query: input
        })
    }
}

class Coupon {

    async validateCoupon(input: { storeId: string, code: string }): Promise<Either<ValidateCouponError, CouponDto>> {
        return await RequestManager.makeRequest<CouponDto, ValidateCouponError>("/template/v1/coupon/validate-coupon", {
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