import { WarpStore } from "./main"



(async () => {

    WarpStore.setApiUrl('http://192.168.1.42:5000')
    const warpstore = new WarpStore()

    const storeInfo = await warpstore.store.v1.getInfo({
        subDomain: "adasd",
        // domain: "ou_seu_dominio" 
    })
    if (storeInfo.isFailure()) return;
})()
"sdddddsdddddddddddddddddd"
