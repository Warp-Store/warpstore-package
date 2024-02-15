# warpstore-package

Esta biblioteca oferece aos desenvolvedores uma coleção descomplicada de funcionalidades para facilitar a integração a API da Warp Store em seu site, permitindo a exibição e venda de produtos cadastrados no nosso Dashboard.

## 📲 Instalação 

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