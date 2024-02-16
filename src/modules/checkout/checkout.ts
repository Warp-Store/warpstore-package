import { DomainError } from "@/core/errors"
import { Either, success } from "@/core/logic"
import { RequestManager } from "@/lib"
import { WarpStore } from "@/main"
import { PlaceOrderInputDto, PlaceOrderOutputDto } from "./dtos"
import { PlaceOrderError } from "./errors/errors"

export class Checkout {


    async placeOrder(input: PlaceOrderInputDto): Promise<Either<PlaceOrderError, PlaceOrderOutputDto>>{
        return await RequestManager.makeRequest<PlaceOrderOutputDto, PlaceOrderError>("/store/checkout/order/place-order", {
            method: "POST",
            body: input
        })
    }

}


export namespace Checkout {


}