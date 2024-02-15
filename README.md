# warpstore-package

Esta biblioteca oferece aos desenvolvedores uma coleção descomplicada de funcionalidades para facilitar a integração a API da Warp Store em seu site, permitindo a exibição e venda de produtos cadastrados no nosso Dashboard.
## 📲 Installation 

1. Instale o nosso NODE SDK usando o comando logo abaixo:
```sh
$ npm i @warpstore/warpstore-package
```


## 🌟 Começando

  O uso simples se parece com:

```javascript
const warpstore = new WarpStore()
    
const response = await warpstore.template.v1.getStoreInfo({
    subDomain: "seu_sub_dominio",
    // domain: "ou_seu_dominio" 
})

if(response.isFailure()){
    console.log(response.value.errorName);
    return;
}

console.log(response.value);
```

## ✨ Logic

  Each operation will yield one of two outcomes: a MercadoPagoError in the event of an error, or the desired value in case of a successful operation.

  You can check if the operation was successfull or not by calling the methods:
```javascript
const payment = await mercadoPago.value.payment.create()
if(payment.isFailure()) console.log("operation failed")
if(payment.isSuccess()) console.log("operation succeeded")
```
Definition of MercadoPagoError:
```javascript
class MercadoPagoError {
  message: string;
  aditionalInfo: any;
  status: number;
  code: number | string
}
```
response if successfull:
```javascript
const response =  {
  id: string
  payment_method_id: string
  // ...
}
```

  Keep in mind the responses are not typed, so you will have to look at the documentation to consult what each operation will return.
