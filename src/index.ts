import { WarpStore } from "./main"



(async () => {

    const warpstore = new WarpStore()
    WarpStore.setApiUrl("http://localhost:5000")
    const response = await warpstore.template.v1.product.validateProducts({
        productsIds: [ "95feeaa5-7579-4dd2-80f4-ebc1104466a0" ]
    })

    if(response.isFailure()){

        return
    }
    console.log(response.value)
    
})()
"sdddddsdddddddd"
