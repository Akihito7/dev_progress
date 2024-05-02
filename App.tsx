import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/theme';
import { StatusBar } from 'expo-status-bar';
import { Dashboard } from './src/screens/Dashboard';
import { Home } from './src/screens/Home';
import { AnalyticsReport } from './src/screens/AnalyticsReport';

export default function App() {
  return (

    <NativeBaseProvider theme={THEME}>
      <StatusBar />
      <AnalyticsReport />
    </NativeBaseProvider>
  );
}
