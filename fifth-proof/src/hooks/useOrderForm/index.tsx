import { useContext } from "react"
import { OrderFormContext } from "../../context/ProductContext"



export const useOrderForm = () => {
    const value = useContext(OrderFormContext)
    return value
}