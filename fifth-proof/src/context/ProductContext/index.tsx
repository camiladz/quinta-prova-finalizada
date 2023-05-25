import React, { ReactNode, createContext, useCallback, useState } from "react";
import { GetProduct, Product, ProductVariables } from '../../typings/getProduct'
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../graphql";



type ProductContextType = {
    product: Product[] | undefined,
    setProduct: React.Dispatch<React.SetStateAction<Product[] | undefined>>,
    data: GetProduct | undefined,
    updateSelectedQuantity: (
        productId: string,
        selectedQuantity: number
    ) => void,
    updateSelectedShippingType: (
        productId: string,
        selectedShippingType: Product['selectedShippingType']
    ) => void,
}

type Props = {
    children: ReactNode
}


export const OrderFormContext = createContext({} as ProductContextType)

export const OrderFormContextProvider = ({ children }: Props) => {


    const [product, setProduct] = useState<ProductContextType['product']>([])

    const { data } = useQuery<GetProduct, ProductVariables>(GET_PRODUCT, {
        variables: {
            input: {
                orderFormId: "c7eb7303-c53f-417d-8d51-cce67e5959e1",
            },
        }, onCompleted: (data) => {
            const injectedProduct = data?.orderForm.items.map((product) => {
                const defaultSelectedShippingType: Product['selectedShippingType'] = product.shipping.pickup ? 'pickup' : 'delivery'
                return ({
                    ...product,
                    selectedQuantity: 1,
                    selectedShippingType: defaultSelectedShippingType
                })
            });
            setProduct(injectedProduct);
        }
    });

    const updateSelectedQuantity = useCallback(
        (productId: string, selectedQuantity: number) => {
            const updateQuantity = product?.map((item) => {
                if (item.id !== productId) return item;
                return {
                    ...item,
                    selectedQuantity
                };
            });
            setProduct(updateQuantity)
        },
        [product]
    )

    const updateSelectedShippingType = useCallback(
        (productId: string, selectedShippingType: Product['selectedShippingType']) => {
            const updateProducts = product?.map((item) => {
                if (item.id !== productId) return item;
                return {
                    ...item,
                    selectedShippingType
                };
            });
            setProduct(updateProducts)
        },
        [product]
    )

    return <OrderFormContext.Provider value={{ product, setProduct, data, updateSelectedQuantity, updateSelectedShippingType }}>
        {children}
    </OrderFormContext.Provider>
}