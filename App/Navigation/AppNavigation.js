import { StackNavigator } from 'react-navigation'
import PickPlaceScreen from '../Containers/PickPlaceScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  PickPlaceScreen: { screen: PickPlaceScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'PickPlaceScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
