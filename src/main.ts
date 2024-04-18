import { Checkout } from "./modules/checkout";
import { Coupons } from "./modules/coupons";
import { DiscordLogin } from "./modules/discord-login";
import { Products } from "./modules/products";
import { Store } from "./modules/store";

export class WarpStore {
    checkout: Checkout
    store: Store
    products: Products
    discordLogin: DiscordLogin
    coupons: Coupons

    constructor() {
        this.checkout = new Checkout()
        this.store = new Store()
        this.products = new Products()
        this.discordLogin = new DiscordLogin()
        this.coupons = new Coupons()
    }

    static apiUrl = "https://api.warpstore.app"

    static storeId: string = "";

    static setApiUrl(url: string) {
        WarpStore.apiUrl = url
    }

    static setStoreId(storeId: string) {
        WarpStore.storeId = storeId
    }
}