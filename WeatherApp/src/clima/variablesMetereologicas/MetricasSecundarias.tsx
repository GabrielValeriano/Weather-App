import React from 'react';
import { View, Text } from "react-native";
import { Droplet, Gauge, Wind } from 'lucide-react-native';
import { styles } from "@/src/clima/estilos/estilosDelIndex";
import { FaRegCircle } from "react-icons/fa";

// 1. Tipado correcto: son números, no funciones
type Props = {
        Humedad: number;
        PresionAtmosferica: number;
        VelocidadDelViento: number;
}

// 2. Nombre semántico y claro
const SeccionDeMetricasClima = ({  Humedad, PresionAtmosferica, VelocidadDelViento }: Props) => {
    return (
        <View style={styles.ContenedorDatosAdicionales}>

            <View style={styles.containerDeDatosMeteorologicos}>
                <Droplet size={30} color="black" />
                <View style={styles.contenedorDeValoresMetereologicos}>
                    <Text style={styles.ValorMetereologico}>
                        {Humedad}
                    </Text>
                    <Text style={styles.MedidaDeValorMetereologico}> %</Text>
                </View>    
            </View>

            <View style={styles.containerDeDatosMeteorologicos}>
                <Gauge size={30} color="black" />
                <View style={styles.contenedorDeValoresMetereologicos}>
                    <Text style={styles.ValorMetereologico}>
                    {PresionAtmosferica}
                    </Text>
                    <Text style={styles.MedidaDeValorMetereologico}> hPa</Text>
                </View>
            </View>

            <View style={styles.containerDeDatosMeteorologicos}>
                <Wind size={30} color="black" />
                <View style={styles.contenedorDeValoresMetereologicos}>
                    <Text style={styles.ValorMetereologico}>
                        {VelocidadDelViento}
                    </Text>
                    <Text style={styles.MedidaDeValorMetereologico}> km/h</Text>
                </View>
            </View>

        </View>
    );
};

export default SeccionDeMetricasClima;