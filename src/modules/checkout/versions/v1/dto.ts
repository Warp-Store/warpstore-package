import { PaymentMethodsEnum } from "@/modules/store/versions/v1/dto"

export type OrderItemDto = {
    productId: string,
    quantity: number
    variables?: Record<string, string> | undefined
}

export type PlaceOrderInputDto = {
    items: OrderItemDto[]
    customer: {
        fullName: string,
        email: string,
        phone: string
    }
    gameUserReference: string
    couponCode?: string
    discordAccessToken?: string
    paymentGateway: keyof typeof PaymentMethodsEnum
}

export type PlaceOrderOutputDto = {
    id: string
    approved: boolean
    qrCode?: string
    code?: string
    paymentLink?: string
    [key: string]: any
}