import { StatusBar, View } from 'react-native';
import Mock from './src/mocks/Cesta'
import Index from './src/pages/cesta';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if(!fonteCarregada){
    return <View/>
  }

  return (
    <View>  
      <StatusBar/>
      <Index {...Mock}/> {/*Com o ...mock eu estou passando os objetos do MockCesta para dentro do componente */}
    </View>
  );
}