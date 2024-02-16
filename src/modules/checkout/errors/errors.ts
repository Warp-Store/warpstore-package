import { CustomDomainError } from "@/core/errors";

type Error =  "GatewayNotEnabledError" | 
    "ProductNotFoundError" | 
    "StoreNotFoundError" |  
    "InsufficientStockError" | 
    "ProductNotFromSameStoreError" | 
    "LimitPerUserReachedError" | string

export class PlaceOrderError extends CustomDomainError<Error> {

    constructor(name: Error) {
        super(name)
    }
}


