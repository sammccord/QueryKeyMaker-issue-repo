import ApolloClient from 'apollo-boost'

export default new ApolloClient({
  uri: 'https://fakerql.com/graphql',
  onError: ({ graphQLErrors, networkError }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
})
