import { DomainError } from "./domain-error";

export class CustomDomainError<T> extends DomainError {
    
    errorName: T

    constructor(name: T, additionalInfo?: DomainError.additionalInfo) {
        super()
        this.errorName = name
        this.name = name as any
        this.addifiionalInfo = additionalInfo
    }
}

export namespace CustomDomainError {
  
}