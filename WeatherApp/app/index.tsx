import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAPIpronosticoClima } from  "src/clima/hooks/useAPIpronostico"
import { styles } from '../src/clima/estilos/estilosDelIndex';
import MetricasSecundarias from '@/src/clima/variablesMetereologicas/MetricasSecundarias';
import TextoCiudad from '@/src/clima/ciudad/TextoCiudad';
import IconoDeCondicionClimatica from '@/src/clima/iconoclima/IconoDeCondicionClimatica';
import { NavegacionPorDias } from '@/src/clima/dias/NavegacionPorDias';
import LayoutPantallaPrincipal from '@/src/clima/PantallaPrincipal/LayoutParaPantallaPrincipal';
import Temperatura_MIN_NOWAVG_MAX from '@/src/clima/temperatura/Temperatura_MIN_NOW-AVG_MAX';

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
                        FechaAyer={Datos.DiaAnterior}
                        FechaMañana={Datos.DiaSiguiente}
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

                    <Temperatura_MIN_NOWAVG_MAX
                        Temperatura_MIN={DatosDelPronostico.tempMin}
                        Temperatura_Actual={DatosDelPronostico.tempActual}
                        Temperatura_MAX={DatosDelPronostico.tempMax}
                        Datos={Datos.EsHoy}
                    />

        </LayoutPantallaPrincipal>
    );
}