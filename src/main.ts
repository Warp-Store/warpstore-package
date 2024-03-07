import { RequestManager } from "./lib";
import { Checkout } from "./modules/checkout/checkout";
import { Template } from "./modules/template";

export class WarpStore {
    checkout: Checkout
    template: Template

    constructor(storeId?: string) {
        this.checkout = new Checkout()
        this.template = new Template()
    }

    static apiUrl = "https://api.warpstore.app"

    static setApiUrl(url: string) {
        WarpStore.apiUrl = url
    }
}


