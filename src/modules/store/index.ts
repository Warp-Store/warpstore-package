import { StoreV1 } from "./versions/v1/v1";

export class Store {
    constructor() { }

    v1: StoreV1 = new StoreV1()
}