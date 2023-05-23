import React, { ReactNode, createContext, useState } from "react";
import { Product } from '../../typings/getProduct'



type ProductContextType = {
    product: Product | undefined,
    setProduct: React.Dispatch<React.SetStateAction<Product | undefined>>
}

type Props = {
    children: ReactNode
}


export const ProductContext = createContext({} as ProductContextType)

export const ProductContextProvider = ({ children }: Props) => {


    const [product, setProduct] = useState<ProductContextType['product']>()

    return <ProductContext.Provider value={{ product, setProduct }}>
        {children}
    </ProductContext.Provider>
}