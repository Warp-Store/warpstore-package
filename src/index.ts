import { WarpStore } from "./main"



(async () => {

    const warpstore = new WarpStore()
    WarpStore.setApiUrl("http://localhost:5000")
    const response = await warpstore.template.v1.getStoreInfo({
        subDomain: "test",
        clientInfo: {
            ip: "",
            userAgent: ""
        }
    })

    console.log(response.value)
    if(response.isFailure()){
        return
    }
})()
"sd"
