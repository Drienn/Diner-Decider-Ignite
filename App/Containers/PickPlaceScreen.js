import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView, View } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base'
import { connect } from 'react-redux'
import { Query } from "react-apollo"
import gql from "graphql-tag"
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PickPlaceScreenStyle'

const GET_PLACES = gql`
{
  search(term: "burrito",
          location: "san francisco",
          limit: 5) {
      total
      business {
          name
          url
      }
  }
}
`

const Places = () => (
  <Query query={GET_PLACES}>
    {({loading, error, data}) => {
      console.log('loading', loading, 'error:', error, 'data', data)
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error! {error.message}`</Text>

      console.log('the data!?!',data)
    }}
  </Query>
)

class PickPlaceScreen extends Component {
  constructor(){
    super()

    this.findFood = this.findFood.bind(this)

    this.state = {}
  }

  findFood(){
    alert('finding food!')
  }

  render () {

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text style={styles.header}>PickPlaceScreen</Text>
          <View style={styles.findPlaceContainer}>
          <Places/>
          </View>
          <Button style={styles.pickerBtn} onPress={this.findFood}><Text>Pick Place</Text></Button>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickPlaceScreen)
