import { RequestManager } from "./lib";
import { Checkout } from "./modules/checkout/checkout";
import { Template } from "./modules/template";

export class WarpStore {
    private requestManager: RequestManager
    checkout: Checkout 
    template: Template 

    constructor(){
        this.requestManager = new RequestManager()
        this.checkout = new Checkout()
        this.template = new Template()
    }

    static apiUrl = "https://api.warpstore.app"

    static setApiUrl(url: string){
        WarpStore.apiUrl = url
    }
}


