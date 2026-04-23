import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAPIpronosticoClima } from  "src/clima/hooks/useAPIpronostico"
import { styles } from '../src/clima/estilos/estilosDelIndex';
import MetricasSecundarias from '@/src/clima/variablesMetereologicas/MetricasSecundarias';
import TextoCiudad from '@/src/clima/ciudad/TextoCiudad';
import IconoDeCondicionClimatica from '@/src/clima/iconoclima/IconoDeCondicionClimatica';
import { NavegacionPorDias } from '@/src/clima/dias/NavegacionPorDias';
import LayoutPantallaPrincipal from '@/src/clima/PantallaPrincipal/LayoutParaPantallaPrincipal';

export default function PantallaPrincipal() {
    const { DatosDelPronostico, EstaCargando, Datos, IrAyerMañana } = useAPIpronosticoClima();

    if (EstaCargando) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#000000" />
                <Text style={{ marginTop: 10 }}>Cargando Lugano...</Text>
            </View>
        );
    }

    return (
        <LayoutPantallaPrincipal>
                    
                    <NavegacionPorDias
                        FechaActual={DatosDelPronostico.fecha}
                        datos={Datos}
                        irMañanaAyer={IrAyerMañana}
                    />

                    <TextoCiudad/>

                    <IconoDeCondicionClimatica
                        CondicionClimatica={DatosDelPronostico.weatherCode}
                    />

                    <MetricasSecundarias
                        Humedad={DatosDelPronostico.humedad}
                        PresionAtmosferica={DatosDelPronostico.presion}
                        VelocidadDelViento={DatosDelPronostico.viento}
                    />

                    <View style={styles.ContenedorPrincipalDelPronostico}>
                        <View style={styles.ContenedorPronostico}>
                            <View style={styles.ContenedorDeTempLateral}><Text style={styles.TextoTempSecundaria}>{DatosDelPronostico.tempMin}°</Text></View>
                            <View style={styles.ContenedorDeTempCentral}><Text style={styles.TextoTempPrincipal}>{DatosDelPronostico.tempActual}°</Text></View>
                            <View style={styles.ContenedorDeTempLateral}><Text style={[styles.TextoTempSecundaria, { textAlign: 'right' }]}>{DatosDelPronostico.tempMax}°</Text></View>
                        </View>
                        <View style={styles.ContenedorDeTextoPronostico}>
                            <View style={styles.ContenedorDeTextoLateral}><Text style={styles.TextoLateralDeLaTemp}>MIN</Text></View>
                            <View style={styles.ContenedorDeTextoCentral}><Text style={styles.TextoCentralDeLaTemp}>{Datos.EsHoy ? "AHORA" : "MEDIA"}</Text></View>
                            <View style={styles.ContenedorDeTextoLateral}><Text style={styles.TextoLateralDeLaTemp}>MAX</Text></View>
                        </View>
                    </View>

        </LayoutPantallaPrincipal>
    );
}