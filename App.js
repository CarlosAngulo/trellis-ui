import Main from './src/components/Main';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'OpenSans_400Regular': require('@expo-google-fonts/open-sans/OpenSans_400Regular.ttf'),
        'OpenSans_700Bold': require('@expo-google-fonts/open-sans/OpenSans_700Bold.ttf'),
        'Newsreader_400Regular': require('@expo-google-fonts/newsreader/Newsreader_400Regular.ttf'),
        'Newsreader_700Bold': require('@expo-google-fonts/newsreader/Newsreader_700Bold.ttf'),
      });

      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <Main />
  );
}
