import { View, Text, TouchableOpacity } from "react-native"
import { ChevronLeft, ChevronRight } from "lucide-react-native"
import { styles } from "@/src/clima/estilos/estilosDelIndex"

type Props ={
    FechaActual:any;
    FechaAyer: any;
    datos:any;
    FechaMañana: any;
    irMañanaAyer: {
        irAlDíaAnterior: () => void;
        irAlDíaSiguiente: () => void;
    }
}

export const NavegacionPorDias = ({ FechaActual, FechaAyer, FechaMañana, datos,irMañanaAyer }: Props) => {
    return (
        <View style={styles.ContenedorNavegacion}>
            <TouchableOpacity 
                testID="button-prev-day" // ID OBLIGATORIO
                onPress={irMañanaAyer.irAlDíaAnterior} 
            >
                <View style={styles.Navegacion}>
                    <ChevronLeft color="black" size={20} />
                    <Text style={styles.textoNavChico}> {FechaAyer}</Text>
                </View>
            </TouchableOpacity>
            
            <Text style={styles.textoFechaPrincipal}>{FechaActual}</Text>
            
            <TouchableOpacity 
                testID="button-next-day" // ID OBLIGATORIO
                onPress={irMañanaAyer.irAlDíaSiguiente} 
            >
                <View style={[styles.Navegacion, { justifyContent: 'flex-end' }]}>
                    <Text style={styles.textoNavChico}>{FechaMañana} </Text>
                    <ChevronRight color="black" size={20} />
                </View>
            </TouchableOpacity>
        </View>
    );
};