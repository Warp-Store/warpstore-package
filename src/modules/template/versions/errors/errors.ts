import { CustomDomainError } from "@/core/errors";

type Error = "NoParamsProvidedError" |  "StoreNotFoundError" | "InvalidRequestError"
 | "InvalidIpError" | "InvalidUserAgent"

export class GetStoreInfoError extends CustomDomainError<Error> {

    constructor(name: Error) {
        super(name)
    }
}


