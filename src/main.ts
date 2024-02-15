import { RequestManager } from "./lib";
import { Template } from "./template";

export class WarpStore {
    requestManager: RequestManager 
    template: Template 

    constructor(){
        this.requestManager = new RequestManager()
        this.template = new Template()
    }

    static apiUrl = "https://api.warpstore.app"

    static setApiUrl(url: string){
        WarpStore.apiUrl = url
    }
}


