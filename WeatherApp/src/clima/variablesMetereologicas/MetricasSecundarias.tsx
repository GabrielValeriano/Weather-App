import React from 'react';
import { View, Text } from "react-native";
import { Droplet, Gauge, Wind } from 'lucide-react-native';
import { styles } from "@/src/clima/estilos/estilosDelIndex";

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
                <View>
                  <Droplet size={30} color="black" />
                  <Text style={styles.ValorMetereologico}>
                      {Humedad}
                  </Text>
                  <Text> %</Text>
                </View>
            </View>

            <View style={styles.containerDeDatosMeteorologicos}>
                <View>
                  <Gauge size={30} color="black" />
                  <Text style={styles.ValorMetereologico}>
                    {PresionAtmosferica}
                  </Text>
                  <Text> hPa</Text>
              </View>
            </View>

            <View style={styles.containerDeDatosMeteorologicos}>
                <View>
                  <Wind size={30} color="black" />
                  <Text style={styles.ValorMetereologico}>
                      {VelocidadDelViento} km/h
                  </Text>
                  <Text> km/h</Text>
                </View>
            </View>
            
        </View>
    );
};

export default SeccionDeMetricasClima;