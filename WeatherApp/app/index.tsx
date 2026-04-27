import React from 'react';
import { useAPIpronosticoClima } from  "@/src/clima/hooks/useAPIpronostico"
import MetricasSecundarias from '@/src/clima/variablesMetereologicas/MetricasSecundarias';
import TextoCiudad from '@/src/clima/ciudad/TextoCiudad';
import IconoDeCondicionClimatica from '@/src/clima/iconoclima/IconoDeCondicionClimatica';
import { NavegacionPorDias } from '@/src/clima/dias/NavegacionPorDias';
import LayoutPantallaPrincipal from '@/src/clima/PantallaPrincipal/LayoutParaPantallaPrincipal';
import Temperatura_MIN_NOWAVG_MAX from '@/src/clima/temperatura/Temperatura_MIN_NOW-AVG_MAX';

export default function PantallaPrincipal() {
    const { DatosDelPronostico, Datos, CambiarFecha } = useAPIpronosticoClima();

    return (
        <LayoutPantallaPrincipal>
                    
                    <NavegacionPorDias
                        FechaActual={DatosDelPronostico}
                        FechaDeAyer={Datos}
                        FechaDeMañana={Datos}
                        AlPresionarElDiaAnterior={CambiarFecha}
                        AlPresionarElDiaSiguiente={CambiarFecha}
                    />

                    <TextoCiudad/>

                    <IconoDeCondicionClimatica
                        CondicionClimatica={DatosDelPronostico}
                    />

                    <MetricasSecundarias
                        Humedad={DatosDelPronostico}
                        PresionAtmosferica={DatosDelPronostico}
                        VelocidadDelViento={DatosDelPronostico}
                    />

                    <Temperatura_MIN_NOWAVG_MAX
                        Temperatura_MIN={DatosDelPronostico}
                        Temperatura_Actual={DatosDelPronostico}
                        Temperatura_MAX={DatosDelPronostico}
                        Datos={Datos}
                    />

        </LayoutPantallaPrincipal>
    );
}