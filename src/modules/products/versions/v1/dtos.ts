export type ProductDetailsDto = {
    id: string
    name: string
    description: string
    price: number
    image: string
    stock: {
        quantity: number | null,
        isAvaible: boolean
    }
}

export type ProductsPaginationDto = {
    products: ProductDetailsDto[]
    limit: number
    page: number
    lastPage: number
    quantityReturned: number
    totalQuantity: number | null
}

export type ValidateProductsDto = {
    productsNotFound: string[]
    products: ProductDetailsDto[]
}