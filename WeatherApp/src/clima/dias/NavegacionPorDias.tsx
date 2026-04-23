import { View, Text, TouchableOpacity } from "react-native"
import { ChevronLeft, ChevronRight } from "lucide-react-native"
import { styles } from "@/src/clima/estilos/estilosDelIndex"

type Props ={
    FechaActual:any;
    datos: any;
    irMañanaAyer: {
        irAlDíaAnterior: () => void;
        irAlDíaSiguiente: () => void;
    }
}
export const NavegacionPorDias = ({ FechaActual, datos, irMañanaAyer }: Props) => {
    return (
        <View style={styles.ContenedorNavegacion}>
            <TouchableOpacity 
                testID="button-prev-day" // ID OBLIGATORIO
                onPress={irMañanaAyer.irAlDíaAnterior} 
                style={{ opacity: datos.indiceDia === 0 ? 0.1 : 1 }}
            >
                <View style={styles.Navegacion}>
                    <ChevronLeft color="black" size={20} />
                    <Text style={styles.textoNavChico}>{datos.Diaanterior}</Text>
                </View>
            </TouchableOpacity>
            
            <Text style={styles.textoFechaPrincipal}>{FechaActual}</Text>
            
            <TouchableOpacity 
                testID="button-next-day" // ID OBLIGATORIO
                onPress={irMañanaAyer.irAlDíaSiguiente} 
                style={{ opacity: datos.indiceDia === datos.cantidadDias - 1 ? 0.1 : 1 }}
            >
                <View style={[styles.Navegacion, { justifyContent: 'flex-end' }]}>
                    <Text style={styles.textoNavChico}>{datos.Diasiguiente}</Text>
                    <ChevronRight color="black" size={20} />
                </View>
            </TouchableOpacity>
        </View>
    );
};