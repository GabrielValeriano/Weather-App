import { View, Text, TouchableOpacity } from "react-native"
import { ChevronLeft, ChevronRight } from "lucide-react-native"
import { styles } from "@/src/clima/estilos/estilosDelIndex"

type Props ={
    FechaActual:any;
    FechaDeAyer: any;
    FechaDeMañana: any;
    AlPresionarElDiaSiguiente: {irAlDíaSiguiente: () => void}
    AlPresionarElDiaAnterior: {irAlDíaAnterior: () => void}
}

export const NavegacionPorDias = ({ FechaActual, FechaDeAyer, FechaDeMañana, AlPresionarElDiaSiguiente, AlPresionarElDiaAnterior }: Props) => {
    return (
        <View style={styles.ContenedorNavegacion}>
            <TouchableOpacity 
                testID="button-prev-day" // ID OBLIGATORIO
                onPress={AlPresionarElDiaAnterior.irAlDíaAnterior} 
            >
                <View style={styles.Navegacion}>
                    <ChevronLeft color="black" size={20} />
                    <Text style={styles.textoNavChico}> {FechaDeAyer}</Text>
                </View>
            </TouchableOpacity>
            
            <Text style={styles.textoFechaPrincipal}>{FechaActual}</Text>
            
            <TouchableOpacity 
                testID="button-next-day" // ID OBLIGATORIO
                onPress={AlPresionarElDiaSiguiente.irAlDíaSiguiente} 
            >
                <View style={[styles.Navegacion, { justifyContent: 'flex-end' }]}>
                    <Text style={styles.textoNavChico}>{FechaDeMañana} </Text>
                    <ChevronRight color="black" size={20} />
                </View>
            </TouchableOpacity>
        </View>
    );
};