import { styles } from "@/src/clima/estilos/estilosDelIndex"
import { View, Text } from "react-native"

const TextoCiudad = () => {
    return (
            <View style={styles.ContenedorCiudad}>
                <Text style={styles.TextoCiudad}>VILLA LUGANO</Text>
            </View>
    )
}
export default TextoCiudad;