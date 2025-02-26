import "../global.css"
import 'react-native-reanimated';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import { Button } from '@/components/Button/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from "nativewind";
import { themes } from "@/lib/theme";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const { setColorScheme, colorScheme } = useColorScheme()

  setColorScheme("system")

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return  null;
  }

  return (
      <SafeAreaView style={themes[colorScheme ?? 'light']} className="bg-background flex-1">
        <View className="flex flex-row gap-4 mx-4">
          <Button text="Default Button" />
          <Button disabled text="Default Button Disabled"/>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
  );
}
