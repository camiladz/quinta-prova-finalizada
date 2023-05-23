import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"



export const useProduct = () => {
    const value = useContext(ProductContext)
    return value
}