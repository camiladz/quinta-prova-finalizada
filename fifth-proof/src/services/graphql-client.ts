import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: "https://lobster-app-2fa5v.ondigitalocean.app/graphql",
    cache: new InMemoryCache({
        resultCaching: false,
    })
})