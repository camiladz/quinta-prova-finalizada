import { useOrderForm } from '../../../hooks'
import { QuantitySelector } from '../QuantitySelector'
import { Delivery, Pickup } from '../Shipping'
import './style.scss'



export const ProductCard = () => {

    const { product } = useOrderForm()

    return <>
        {product?.map(item =>
            <div className="productCard">
                <div className="productCard__header">
                    <span className="productCard__productTitle">
                        Produto
                    </span>
                    <span className="productCard__price">
                        Valor unitário
                    </span>
                    <span className="productCard__quantity">
                        Quantidade
                    </span>
                </div>
                <div className="productCard__product">
                    <div className="productCard__info">
                        <img src={item.image} alt="" className="product__image" />
                        <span className="product__name">
                            {item.name}
                        </span>
                    </div>
                    <div className="product__prices">
                        {(Number(item.listPrice) > Number(item.price)) && <span className="product__listPrice">
                            {Number(item.listPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                        }
                        <span className="product__price">
                            {Number(item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                        {(Number(item.listPrice) > Number(item.price)) && <span className="product__discount">
                            - %{((Number(item.price) / Number(item.listPrice)) * 100).toFixed(0)}
                        </span>}
                    </div>
                    <div className="productSelect__quantity">
                        <QuantitySelector productId={item.id} selectedQuantity={(item.selectedQuantity)} />
                    </div>
                    <button className="remove__product">
                        <svg className="remove__icon"
                            width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 2.5H12.5M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5M8.33333 8.75V12.9167M11.6667 8.75V12.9167" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <button className="extendedWarranty">
                    <span className="extendedWarranty__text">
                        Adicionar Garantia Estendida

                    </span>
                </button>
                <div className="shipping" >
                    <div className="shipping__title">
                        Forma de entrega
                    </div>
                    <div className="shipping__content">
                        {item.shipping.pickup && <Pickup productId={item.id} selectedShippingType={item.selectedShippingType} />}
                        {item.shipping.delivery && <Delivery productId={item.id} selectedShippingType={item.selectedShippingType} days={item.shipping.delivery.days} price={item.shipping.delivery.value} />}
                    </div>

                </div>

                <div className="resumeProduct__total">
                    <span className="resumeProduct__total--text">
                        Total
                    </span>
                    <span className="resumeProduct__total--price">
                        {(Number(item.price) * item.selectedQuantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                </div>
            </div >
        )}
    </>
}