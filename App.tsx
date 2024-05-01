import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/theme';
import { StatusBar } from 'expo-status-bar';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  return (

    <NativeBaseProvider theme={THEME}>
      <StatusBar />
      <Dashboard />
    </NativeBaseProvider>
  );
}
