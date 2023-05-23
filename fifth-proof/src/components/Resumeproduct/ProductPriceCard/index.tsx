
import './styles.scss'

export const ProductPriceCard = () => {
    return <div className="priceCard">
        <div className="product__subtotal">
            <span className="subtotal__text">
                Subtotal
            </span>
        </div>
        <div className="product__discount">
            <span className="discount__text">
                Desconto
            </span>
        </div>
        <div className="product__shipping">
            <span className="shipping__text">
                Entrega
            </span>
        </div>
        <div className="product__total">
            <span className="total__text">
                Total
                <div className="total__price">

                    <span className="total__message">
                        em até 10x de
                    </span>
                </div>
            </span>
        </div>
        <button>
            Ir para pagamento
        </button>
    </div>
}