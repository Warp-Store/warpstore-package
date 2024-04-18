import { Either } from "@/core/logic"
import { CouponDto } from "./dtos"
import { RequestManager } from "@/lib"
import { ValidateCouponError } from "./errors"
import { WarpStore } from "@/main"

export class CouponsV1 {
    constructor() { }

    async validateCoupon(input: CouponsV1.ValidateCouponInput): Promise<CouponsV1.ValidateCouponOutput> {
        return await RequestManager.makeRequest<CouponDto, ValidateCouponError>("/template/v1/coupon/validate-coupon", {
            method: "POST",
            body: {
                ...input,
                storeId: WarpStore.storeId
            }
        })
    }
}

export namespace CouponsV1 {
    export type ValidateCouponInput = {
        code: string
    }

    export type ValidateCouponOutput = Either<ValidateCouponError, CouponDto>
}