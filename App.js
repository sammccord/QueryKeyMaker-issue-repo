import React from 'react'
import { ApolloProvider } from 'react-apollo'
import apolloClient from './src/apolloClient'
import Query from './src/query'

export default class App extends React.Component {
  render () {
    return (
      <ApolloProvider client={apolloClient}>
        <Query />
      </ApolloProvider>
    )
  }
}
