import { Image, View } from "react-native"
import { obtenerImagenClima } from "../tipos/CondicionClimatica"
import { styles } from "@/src/clima/estilos/estilosDelIndex"

const IconoDeCondicionClimatica = ({CondicionClimatica} :{CondicionClimatica: number}) =>{
    return (
        <View>
            {obtenerImagenClima(CondicionClimatica)}
        </View>
    )
}

export default IconoDeCondicionClimatica