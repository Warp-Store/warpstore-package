import { CustomDomainError } from "@/core/errors"

type GetStoreInfoErrorType = "NoParamsProvidedError" | "StoreNotFoundError" | "InvalidRequestError"
    | "InvalidIpError" | "InvalidUserAgent"

export class GetStoreInfoError extends CustomDomainError<GetStoreInfoErrorType> {
    constructor(name: GetStoreInfoErrorType) {
        super(name)
    }
}