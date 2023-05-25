export type OrderForm = {
    id: string,
    items: {
        id: string,
        image: string,
        listPrice: string,
        name: string,
        price: string,
        quantity: string,
        selectedQuantity: number,
        shipping: {
            delivery: {
                days: string,
                value: string
            }
            pickup: boolean
        }
    }[]
}

export type ProductVariables = {
    input: {
        orderFormId: string
    }
}

export type GetProduct = {
    orderForm: OrderForm
}

export type Shipping = {
    delivery: {
        days: string,
        value: string
    }
    pickup: boolean
}

export type Product = {
    id: string,
    image: string,
    listPrice: string,
    name: string,
    price: string,
    selectedQuantity: number,
    selectedShippingType: 'pickup' | 'delivery',
    shipping: {
        delivery: {
            days: string,
            value: string
        }
        pickup: boolean
    }
}