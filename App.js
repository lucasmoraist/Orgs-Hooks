import { StatusBar, View } from 'react-native';
import Mock from './src/mocks/Cesta'
import Index from './src/pages/cesta';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if(!fonteCarregada){
    return <AppLoading />
  }

  return (
    <View style={{ flex: 1 }}>  
      <StatusBar/>
      {/*Com o ...mock eu estou passando os objetos do MockCesta para dentro do componente */}
      <Index {...Mock}/> 
    </View>
  );
}