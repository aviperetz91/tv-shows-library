import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../Screens/Home';
import ShowDetails from '../Screens/ShowDetails';

const RootStack = createStackNavigator(
    {
        Home,
        ShowDetails
    },
    {
        initialRouteName: "Home",
        headerMode: "none"
    },
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;