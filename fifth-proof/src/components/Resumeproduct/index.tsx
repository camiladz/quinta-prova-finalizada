import { ProductCard } from "./ProductCard"
import { ProductPriceCard } from "./ProductPriceCard"
import "./styles.scss"



export const ResumeProduct = () => {


    return <div className="resumeProduct">
        <div className="resumeProduct__header">
            <div className="resumeProduct__titleAndButton">
                <div className="resume__title">
                    Resumo do Pedido
                </div>
                <button className="resume__button">
                    Continuar Comprando
                </button>
            </div>
        </div>
        <div className="productCardAndPrice">
            <div>
                <ProductCard />
            </div>
            <div>
                <ProductPriceCard />
            </div>
        </div>
    </div>
}