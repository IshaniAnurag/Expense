import * as React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import NewTransactionScreen from '../screens/NewTransactionScreen'
import ReportScreen from '../screens/ReportScreen'

export const AppTabNavigator = createBottomTabNavigator({
    Transaction:{
        screen:NewTransactionScreen,
        navigationOptions:{
            tabBarLabel:"Transaction"
        }
    },
Report : {
    screen:ReportScreen,
    navigationOptions:{
        tabBarLabel:"Report"
    }
}
})
