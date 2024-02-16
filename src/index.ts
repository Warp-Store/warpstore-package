import { WarpStore } from "./main"



(async () => {

    const warpstore = new WarpStore()
    WarpStore.setApiUrl("http://localhost:5000")
    const response = await warpstore.checkout.placeOrder({
        storeId: "c5975061-2e97-45f4-b53d-901c9d8f6d9a",
        paymentGateway: "PIX",
        gameUserReference: "batata",
        customer: {
            fullName: "Carlos Piroca Silva",
            email: "carlospiroca@gmail.com",
            cpf: "83616094070",
            phone: "55 21979651124"
        },
        items: [
                {  productId: "38b522fb-307e-47ec-829d-dfc75b969239", quantity: 1 }
            ]   
        })

    if(response.isFailure()){
        console.log(response.value.errorName === "")
        return
    }
    console.log(response.value)
})()
"sd"
