import { DomainError } from "./domain-error";

export class CustomDomainError<T> extends DomainError {
    
    errorName: T

    constructor(name: T) {
        super()
        this.errorName = name
        this.name = name as any
    }
}
