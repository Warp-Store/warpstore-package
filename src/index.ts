import { WarpStore } from "./main"



(async () => {

    const warpstore = new WarpStore()
    WarpStore.setApiUrl("http://localhost:5000")
    const response = await warpstore.template.v1.getProducts({
        categoryId: "2865c691-f4a5-471e-a690-800f5d50c295",
        limit: 5,
        page: 1
    })

    console.log(response.value)
    if(response.isFailure()){
        return
    }
})()
"sddddsdddd"
