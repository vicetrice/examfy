import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddPhoto from '../assets/camera-add-svgrepo-com.png';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={AddPhoto} />

        </Tab.Navigator>
    );
}
export default Tabs;