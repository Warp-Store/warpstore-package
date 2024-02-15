import { WarpStore } from "./main"



(async () => {

    const warpstore = new WarpStore()
    
    const response = await warpstore.template.v1.getStoreInfo({
        subDomain: "batata"
    })

    console.log(response.value)
    if(response.isFailure()){
        return
    }
})()

