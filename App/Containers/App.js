import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

// create our store
const store = createStore()

/*
Yelp API Key Info:
Client ID: L4EXlp4gWYTR29BN2w6p-g
API Key: ZKLjbFzjfcLE68jRS1SXh1rUEOn2iNKiNCMft1_7mrLQtIGPPasqSLSkFS_DV-Cm_2Z6wz8xcndbpUu05o5pkIib7OBgPBgJdfbgmlFRdjpvSV_gNvCFB8bWCH3ZWnYx
*/

const httpLink = createHttpLink({
  uri: `https://api.yelp.com/v3/graphql`,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RootContainer />
      </Provider>
     </ApolloProvider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
