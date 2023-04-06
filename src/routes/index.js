import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Favourites } from '../screens/Favourites'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
           screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#121212"

           }}
        >
            <Tab.Screen name="HomeTab" component={Home} />
            <Tab.Screen name='Favourites' component={Favourites} />
        </Tab.Navigator>

    )

}