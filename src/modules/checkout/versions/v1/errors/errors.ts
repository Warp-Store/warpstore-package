import { CustomDomainError } from "@/core/errors"

type PlaceOrderErrorType = "GatewayNotEnabledError" |
    "ProductNotFoundError" |
    "StoreNotFoundError" |
    "InsufficientStockError" |
    "ProductNotFromSameStoreError" |
    "LimitPerUserReachedError" | "StoreIdNotProvidedError" | string

export class PlaceOrderError extends CustomDomainError<PlaceOrderErrorType> {
    constructor(name: PlaceOrderErrorType) {
        super(name)
    }
}