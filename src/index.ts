import { WarpStore } from "./main"



(async () => {

    const warpstore = new WarpStore()

    const storeInfo = await warpstore.store.v1.getInfo({
        subDomain: "demo",
        // domain: "ou_seu_dominio" 
    })

    console.log(storeInfo.value);
})()
"sdddddsdddddddddddddddddd"
