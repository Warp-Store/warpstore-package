import { CustomDomainError } from "@/core/errors";

type GetStoreError = "NoParamsProvidedError" |  "StoreNotFoundError" | "InvalidRequestError"
 | "InvalidIpError" | "InvalidUserAgent"

export class GetStoreInfoError extends CustomDomainError<GetStoreError> {

    constructor(name: GetStoreError) {
        super(name)
    }
}

type ValidateCoupon = "CouponNotEnabledError" | "CouponIsExpiredError" | "CouponUseLimitReachedError" | "SignatureNotFoundError"

export class ValidateCouponError extends CustomDomainError<ValidateCoupon> {

    constructor(name: ValidateCoupon) {
        super(name)
    }
}



