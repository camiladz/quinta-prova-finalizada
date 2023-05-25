import { useMemo } from 'react'
import { useOrderForm } from '../../../hooks'
import './styles.scss'
import { Product } from '../../../typings/getProduct'


export const ProductPriceCard = () => {

    const { product } = useOrderForm()

    const totalItemsPrice = useMemo(() => {
        return product?.reduce((prev: number, currItem: Product) => {
            if (!currItem) return prev
            return prev + currItem.selectedQuantity * Number(currItem.price)
        }, 0)
    }, [product])

    const totalItemsDiscount = useMemo(() => {
        return product?.reduce((prev: number, currItem: Product) => {
            if (!currItem) return prev
            const priceNumber = Number(currItem.price)
            const listPriceNumber = Number(currItem.listPrice)
            if (listPriceNumber <= priceNumber) return prev
            const discountValue = priceNumber - listPriceNumber
            return prev + discountValue * currItem.selectedQuantity
        }, 0)
    }, [product])

    const totalItemsShippping = useMemo(() => {
        return product?.reduce((prev: number, currItem: Product) => {
            if (!currItem || currItem.selectedShippingType === 'pickup') return prev
            const deliveryPrice = Number(currItem.shipping.delivery.value)
            return prev + deliveryPrice
        }, 0)
    }, [product])

    const totalPrice = (totalItemsPrice || 0) + (totalItemsShippping || 0)

    return <>
        <div className="priceCard">
            <div className="priceCard__prices">
                <div className="priceCard__subtotal">
                    <span className="subtotal__text">
                        Subtotal
                    </span>
                    <span className="subtotal__price">
                        {(totalItemsPrice || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>

                </div>
                <div className="priceCard__discount">
                    <span className="discount__text">
                        Desconto
                    </span>
                    <span className="discount__price">
                        - {Math.abs(totalItemsDiscount ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                </div>
                <div className="priceCard__shipping">
                    <span className="shipping__text">
                        Entrega
                    </span>
                    <span className="total__shipping">
                        {(totalItemsShippping || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                </div>
            </div>
            <div className="priceCard__total">
                <span className="total__text">
                    Total
                    <div className="total__price">
                        {(totalPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        <span className="total__message"> {' '}
                            em até 10x de {(totalPrice / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                    </div>
                </span>
            </div>
            <div className="goToPayment">
                <button className='goToPayment__button'>
                    Ir para pagamento
                </button>
            </div>
        </div>
    </>
}