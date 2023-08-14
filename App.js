import Main from './src/components/Main';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadFontsAndIcons() {
    await Promise.all([
      Font.loadAsync({
        'OpenSans_400Regular': require('@expo-google-fonts/open-sans/OpenSans_400Regular.ttf'),
        'OpenSans_700Bold': require('@expo-google-fonts/open-sans/OpenSans_700Bold.ttf'),
        'Newsreader_400Regular': require('@expo-google-fonts/newsreader/Newsreader_400Regular.ttf'),
        'Newsreader_700Bold': require('@expo-google-fonts/newsreader/Newsreader_700Bold.ttf'),
      }),
      Ionicons.loadFont(),
    ]);
  }

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await loadFontsAndIcons();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
      }
    }
  
    loadResourcesAndDataAsync();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <Main />
  );
}
