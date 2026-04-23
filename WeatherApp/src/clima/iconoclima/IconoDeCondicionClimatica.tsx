import { Image } from "react-native"
import { obtenerImagenClima } from "../tipos/CondicionClimatica"
import { styles } from "@/src/clima/estilos/estilosDelIndex"

const IconoDeCondicionClimatica =({CondicionClimatica} :{CondicionClimatica: number}) =>{
    return (
            
            <Image source={obtenerImagenClima(CondicionClimatica)} style={styles.mainImage} resizeMode="contain" />
        
    )
}

export default IconoDeCondicionClimatica