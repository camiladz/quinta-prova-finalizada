export type Product = {
    id: string,
    items: {
        id: string,
        image: string,
        listPrice: string,
        price: string,
        shipping: {
            delivery: {
                days: string,
                value: string
            }
        }
        pickup: string
    }[]
}

export type ProductVariables = {
    input: {
        orderFormId: string
    }
}

export type GetProduct = {
    orderForm: Product
}