import "./styles.scss"
import { useOrderForm } from "../../../hooks";

type Props = {
    productId: string,
    selectedQuantity: number
}

export const QuantitySelector = ({ productId, selectedQuantity }: Props) => {

    const { updateSelectedQuantity } = useOrderForm()

    return (
        <>
            <select className="selectQuantity" value={selectedQuantity} onChange={(e) =>
                (updateSelectedQuantity(productId, Number(e.target.value)))}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
            </select>
        </>
    );
};