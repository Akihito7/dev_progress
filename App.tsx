import { NativeBaseProvider } from 'native-base';
import { Signln } from './src/screens/Signln';
import { THEME } from './src/theme';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';

export default function App() {
  return (

    <NativeBaseProvider theme={THEME}>
      <StatusBar />
      <Home />
    </NativeBaseProvider>
  );
}
