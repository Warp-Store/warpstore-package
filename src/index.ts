import { WarpStore } from "./main"



(async () => {

    const warpstore = new WarpStore()

    const storeInfo = await warpstore.template.v1.store.getInfo({
        subDomain: "seu_sub_dominio",
        // domain: "ou_seu_dominio" 
    })

    if (storeInfo.isFailure()) return; // ele ignora tudo caso a loja não for encontrada.

    const response = await warpstore.checkout.placeOrder({
        storeId: storeInfo.value.id, // id da loja retornado nos dados da loja
        customer: {
            cpf: 'cpf cliente',
            email: 'email cliente',
            fullName: 'nome completo cliente',
            phone: 'telefone cliente'
        },
        gameUserReference: 'id no jogo',
        items: [
            {
                productId: 'id de um produto por exemplo',
                quantity: 2, // quantidade,
            }
        ],
        paymentGateway: "MERCADO_PAGO", // metodo de pagamento,
        couponCode: 'código de cupom se o cliente usou'
    })
    if (response.isFailure()) {
        // ele vai dar um failure caso não for possível criar a compra ou der um erro.
    }

    console.log(response.value) /* Retorna isto: 
        id: string
        approved: boolean
        qrCode?: string
        code?: string
        paymentLink?: string
    */
})()
"sdddddsdddddddddddddddddd"
