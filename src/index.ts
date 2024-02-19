import { WarpStore } from "./main"



(async () => {

    const warpstore = new WarpStore()
    WarpStore.setApiUrl("http://localhost:5000")
    const response = await warpstore.template.v1.discordLogin.getCurrentUser({
        storeId: "30363d97-f8d7-4dea-af2c-0451f7bca15d",
        accessToken: "11aZi3CExHn1NTUHfShmz8esujdwOdm"
    })

    console.log(response.value)
    if(response.isFailure()){

        return
    }
    
})()
"sdddddsddddddddddddd"
