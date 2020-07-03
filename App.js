
import 'react-native-gesture-handler';
import Routes from './src/routes';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium, useFonts} from '@expo-google-fonts/roboto';
import * as React from 'react';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}



