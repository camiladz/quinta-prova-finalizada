import { useOrderForm } from '../../../../hooks'
import { Product } from '../../../../typings/getProduct'
import './../styles.scss'

type Props = {
    productId: string,
    selectedShippingType: Product['selectedShippingType'],
    days: string,
    price: string
}

export const Delivery = ({ productId, selectedShippingType, days, price }: Props) => {

    const { updateSelectedShippingType } = useOrderForm()

    return <>

        <div className="shipping__delivery">
            <label className="shipping__checkbox">
                <input
                    type="radio"
                    name={`${productId}-shipping`}
                    checked={selectedShippingType === 'delivery'}
                    onChange={() => updateSelectedShippingType(productId, 'delivery')}
                />
                <div className="shipping__messages">
                    <span className="shipping__text">
                        Entrega
                    </span>

                    <span className="shipping__days">
                        Receba até {days} dias úteis
                    </span>
                </div>

            </label>
            <span className="shipping__price">
                + {Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
        </div>

    </>


}