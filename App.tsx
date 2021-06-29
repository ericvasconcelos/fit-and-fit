import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NotoSans_400Regular,  NotoSans_700Bold } from '@expo-google-fonts/noto-sans';
import { Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { Page } from './components/Page';

export default function App() {
  const isLoadingComplete = useCachedResources();

  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold,
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Page>
        <StatusBar 
          backgroundColor="transparent"
          style="light"
          translucent
        />
        <Navigation />
      </Page>
    );
  }
}
