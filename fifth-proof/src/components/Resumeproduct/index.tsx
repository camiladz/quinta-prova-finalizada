import { useQuery } from "@apollo/client"
//import { useProduct } from "../../hooks"
import { ProductCard } from "./ProductCard"
import { ProductPriceCard } from "./ProductPriceCard"
import { GET_PRODUCT } from "../../graphql"
import { GetProduct, ProductVariables } from "../../typings/getProduct"



export const ResumeProduct = () => {

    const { data } = useQuery<GetProduct, ProductVariables>(GET_PRODUCT, {
        variables: {
            input: {
                orderFormId: "c7eb7303-c53f-417d-8d51-cce67e5959e1",
            },
        }
    });


    return data?.orderForm.items.map(item => <>
        <div className="resumeProduct">

            <div className="resumeProduct__titleAndButton">
                <div className="resume__title">
                    Resumo do Pedido
                </div>
                <button className="resume__button">
                    Continuar Comprando
                </button>
            </div>

            <ProductCard />
            <ProductPriceCard />
        </div>
    </>
    )
}