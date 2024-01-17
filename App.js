import React from 'react';
import login from "./components/screen/login";
import register from "./components/screen/register";
import home from "./components/screen/home";
import edit from './components/screen/edit';
import siswa from './components/screen/siswa';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

       
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Register" component={register} />
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Edit" component={edit} />
        <Stack.Screen name="Siswa" component={siswa} />
      
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;