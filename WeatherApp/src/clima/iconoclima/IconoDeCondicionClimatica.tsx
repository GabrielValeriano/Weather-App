import { Image, View } from "react-native"
import { obtenerIconoDelClima } from "../tipos/CondicionClimatica"
import { styles } from "@/src/clima/estilos/estilosDelIndex"

const IconoDeCondicionClimatica = ({CondicionClimatica} :{CondicionClimatica: number}) =>{
    return (
        <View>
            {obtenerIconoDelClima(CondicionClimatica)}
        </View>
    )
}

export default IconoDeCondicionClimatica