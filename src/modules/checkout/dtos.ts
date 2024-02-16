import { PaymentMethodsEnum } from "../template/versions/dtos"

export type Item = {
    productId: string,
    quantity: number
    variables: Record<string, string> | undefined
}

export type PlaceOrderInputDto = {
    items: Item[]
    storeId: string
    customer: {
        fullName: string,
        email: string,
        cpf: string,
        phone: string
    }
    gameUserReference: string
    couponCode?: string
    discordAccessToken?: string
    paymentGateway: keyof typeof PaymentMethodsEnum
}  

export type PlaceOrderOutputDto = {
    id: string
    qrCode?: string
    code?: string
    paymentLink?: string
    [key: string]: any
}