import { View, Text } from 'react-native';

import styles from './styles';

import Mensagem from './mensagem';

function Exemplo_2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 2</Text>

             <Mensagem />
    
        </View>
    );
}

export default Exemplo_2 ;