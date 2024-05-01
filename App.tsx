import { NativeBaseProvider } from 'native-base';
import { Signln } from './src/screens/Signln';
import { THEME } from './src/theme';

export default function App() {
  return (

    <NativeBaseProvider theme={THEME}>
      <Signln />
    </NativeBaseProvider>
  );
}
