import { gql } from "@apollo/client"

export const GET_PRODUCT = gql`
query orderForm($input: OrderFormInput!) {
    orderForm(input: $input) {
    id
    items {
        id
        image
        name
        listPrice
        price
        shipping {
        delivery{
            days
            value
        }
        pickup
        }
        }
    }
}
`