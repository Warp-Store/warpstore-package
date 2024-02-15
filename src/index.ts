import { WarpStore } from "./main"



(async () => {

    const warpstore = new WarpStore()
    WarpStore.setApiUrl("http://localhost:5000")
    const response = await warpstore.template.v1.getStoreInfo({
        subDomain: "batata"
    })

    if(response.isFailure()){
        return
    }
    console.log(response.value)
})()

