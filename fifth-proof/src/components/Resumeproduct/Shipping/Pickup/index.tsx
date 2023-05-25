import { useOrderForm } from "../../../../hooks"
import { Product } from "../../../../typings/getProduct"
import "./../styles.scss"

type Props = {
    productId: string,
    selectedShippingType: Product['selectedShippingType']
}

export const Pickup = ({ productId, selectedShippingType }: Props) => {

    const { updateSelectedShippingType } = useOrderForm()

    return <>
        <div className="pickup">
            <div className="pickup__content">
                <div className="shipping__pickup">
                    <label className="pickup__checkbox">
                        <input
                            type="radio"
                            name={`${productId}-shipping`}
                            checked={selectedShippingType === 'pickup'}
                            onChange={() => updateSelectedShippingType(productId, 'pickup')}
                        />
                        <div className="pickup__messages">
                            <span className="pickup__title">
                                Retirada
                            </span>
                            <span className="pickup__text">
                                Disponível em estoque
                            </span>
                        </div>
                    </label>

                    <span className="shipping__pickup--test">
                        Grátis
                    </span>
                </div>

            </div>
        </div>

    </>
}