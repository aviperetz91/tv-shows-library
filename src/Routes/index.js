import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import ShowDetails from '../screens/ShowDetails';


const RootStack = createStackNavigator(
    {
        Home,
        ShowDetails
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                borderColor: "#aaa",
                backgroundColor: "#212529",
                height: 60, 
            },
            headerTitleContainerStyle: {
                alignItems: "center",
                justifyContent: "center"
            },
            headerTintColor: "#fff"
        }
    },
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;