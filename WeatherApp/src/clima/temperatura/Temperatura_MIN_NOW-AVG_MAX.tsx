import { View, Text } from "react-native";
import { styles } from "../estilos/estilosDelIndex";

type Props ={
    Temperatura_MIN: number,
    Temperatura_Actual: number,
    Temperatura_MAX: number,
    Datos: any
}
const Temperatura_MIN_NOWAVG_MAX = ({ Temperatura_MIN, Temperatura_Actual, Temperatura_MAX, Datos}: Props ) =>{
    return(
            <View style={styles.ContenedorPrincipalDelPronostico}>
                <View style={styles.ContenedorPronostico}>
                    <View style={styles.ContenedorDeTempLateral}><Text style={styles.TextoTempSecundaria}> {Temperatura_MIN}°</Text></View>
                    <View style={styles.ContenedorDeTempCentral}><Text style={styles.TextoTempPrincipal}> {Temperatura_Actual}°</Text></View>
                    <View style={styles.ContenedorDeTempLateral}><Text style={[styles.TextoTempSecundaria, { textAlign: 'right' }]}> {Temperatura_MAX}°</Text></View>
                </View>
                <View style={styles.ContenedorDeTextoPronostico}>
                    <View style={styles.ContenedorDeTextoLateral}><Text style={styles.TextoLateralDeLaTemp}>MIN</Text></View>
                    <View style={styles.ContenedorDeTextoCentral}><Text style={styles.TextoCentralDeLaTemp}>{Datos ? "NOW" : "AVG"}</Text></View>
                    <View style={styles.ContenedorDeTextoLateral}><Text style={styles.TextoLateralDeLaTemp}>MAX</Text></View>
                </View>
            </View>
    );
};

export default Temperatura_MIN_NOWAVG_MAX;