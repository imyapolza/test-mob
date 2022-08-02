import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import App from '../App';
import Posts from './Posts';
import AuthWindow from '../components/AuthWindow';
import Home from './Home';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Авторизация' }} />
        <Stack.Screen name="Posts" component={Posts} options={{ title: 'Посты' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
