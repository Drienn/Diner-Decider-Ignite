import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

let { height, width } = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: 'lightblue'
  },
  header: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: '10%',
  },
  findPlaceContainer: {
    height: height * .8
  },
  pickerBtn: {
    alignSelf: 'center'
  }
})
