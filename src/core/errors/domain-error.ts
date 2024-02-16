
export class DomainError extends Error {

    addifiionalInfo?: DomainError.additionalInfo

    constructor(message?: string,  additionalInfo?: DomainError.additionalInfo) {
        super(message)
        this.name = this.constructor.name
        this.addifiionalInfo = additionalInfo
    }
}

export namespace DomainError {
    export type additionalInfo = {
        [key: string]: any
    }   
}