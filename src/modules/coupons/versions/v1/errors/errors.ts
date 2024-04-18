import { CustomDomainError } from "@/core/errors"

type ValidateCouponType = "CouponNotEnabledError" | "CouponIsExpiredError" | "CouponUseLimitReachedError" | "SignatureNotFoundError"

export class ValidateCouponError extends CustomDomainError<ValidateCouponType> {

    constructor(name: ValidateCouponType) {
        super(name)
    }
}