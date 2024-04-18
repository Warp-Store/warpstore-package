import { Either } from "@/core/logic"
import { PlaceOrderInputDto, PlaceOrderOutputDto } from "./dto"
import { PlaceOrderError } from "./errors"
import { RequestManager } from "@/lib"
import { WarpStore } from "@/main"

export class CheckoutV1 {
    async placeOrder(input: PlaceOrderInputDto): Promise<CheckoutV1.PlaceOrderOutput> {
        return await RequestManager.makeRequest<PlaceOrderOutputDto, PlaceOrderError>("/store/checkout/order/place-order", {
            method: "POST",
            body: {
                ...input,
                storeId: WarpStore.storeId
            }
        })
    }
}

export namespace CheckoutV1 {
    export type PlaceOrderOutput = Either<PlaceOrderError, PlaceOrderOutputDto>
}