import React from 'react'
import { View } from 'react-native'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const TEST = gql`
  query me {
    me {
      id
    }
  }
`

export default class TestQuery extends React.Component {
  render () {
    return (
      <Query query={TEST}>
        {({ loading, error, data }) => {
          console.log(loading, error, data)
          return <View />
        }}
      </Query>
    )
  }
}
