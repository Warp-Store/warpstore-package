import { WarpStore } from "./main"



(async () => {

    const warpstore = new WarpStore()
    WarpStore.setApiUrl("http://localhost:5000")
    const response = await warpstore.template.v1.coupon.validateCoupon({
        storeId: "30363d97-f8d7-4dea-af2c-0451f7bca15d",
        code: "batata"
    })

    if(response.isFailure()){

        return
    }
    
})()
"sdddddsddddddd"
