import { WarpStore } from "./main"



(async () => {

    const warpstore = new WarpStore()
    WarpStore.setApiUrl("http://localhost:5000")
    const response = await warpstore.checkout.placeOrder({
        
    } as any)

    if(response.isFailure()){
        return
    }
    console.log(response.value)
})()

