import React from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Droplet, Gauge, Wind, ChevronLeft, ChevronRight } from 'lucide-react-native';
import { usePronosticoClima } from './hooks/usePronosticoClima';
import { obtenerImagenClima } from './tipos/climaObtenerImagenes';
import { DatosAdicionalesDeClima } from './componentes/contenidos/DatosAdicionalesDelClima';
import { styles } from './componentes/estilos/estilosDelIndex';

export default function PantallaPrincipal() {
    const { diaActual, estaCargando, datos, acciones } = usePronosticoClima();

    if (estaCargando) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#000000" />
                <Text style={{ marginTop: 10 }}>Cargando Lugano...</Text>
            </View>
        );
    }

    return (
        <View style={styles.ContenedorMain}>
            <StatusBar style='light' />
            <Image blurRadius={20} source={require("../assets/images/fondo.png")} style={styles.backgroundImage} />
            
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.ContenedorDatos}>
                    
                    <View style={styles.ContenedorNavegacion}>
                        <TouchableOpacity onPress={acciones.irAlAnterior} style={{ opacity: datos.indiceDia === 0 ? 0.1 : 1 }}>
                            <View style={styles.Navegacion}>
                                <ChevronLeft color="black" size={20} />
                                <Text style={styles.textoNavChico}>{datos.Diaanterior}</Text>
                            </View>
                        </TouchableOpacity>
                        
                        <Text style={styles.textoFechaPrincipal}>{diaActual.fecha}</Text>
                        
                        <TouchableOpacity onPress={acciones.irAlSiguiente} style={{ opacity: datos.indiceDia === datos.cantidadDias - 1 ? 0.1 : 1 }}>
                            <View style={[styles.Navegacion, { justifyContent: 'flex-end' }]}>
                                <Text style={styles.textoNavChico}>{datos.Diasiguiente}</Text>
                                <ChevronRight color="black" size={20} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.TextoCiudad}>VILLA LUGANO</Text>

                    <Image source={obtenerImagenClima(diaActual.weatherCode)} style={styles.mainImage} resizeMode="contain" />

                    <View style={styles.ContenedorDatosAdicionales}>
                        <DatosAdicionalesDeClima Icono={Droplet} valor={diaActual.humedad} unidad="%" />
                        <DatosAdicionalesDeClima Icono={Gauge} valor={diaActual.presion} unidad=" hPa" />
                        <DatosAdicionalesDeClima Icono={Wind} valor={diaActual.viento} unidad=" km/h" />
                    </View>

                    <View style={styles.ContenedorPrincipalDelPronostico}>
                        <View style={styles.ContenedorPronostico}>
                            <View style={styles.ContenedorDeTempLateral}><Text style={styles.TextoTempSecundaria}>{diaActual.tempMin}°</Text></View>
                            <View style={styles.ContenedorDeTempCentral}><Text style={styles.TextoTempPrincipal}>{diaActual.tempActual}°</Text></View>
                            <View style={styles.ContenedorDeTempLateral}><Text style={[styles.TextoTempSecundaria, { textAlign: 'right' }]}>{diaActual.tempMax}°</Text></View>
                        </View>
                        <View style={styles.ContenedorDeTextoPronostico}>
                            <View style={styles.ContenedorDeTextoLateral}><Text style={styles.TextoLateralDeLaTemp}>MIN</Text></View>
                            <View style={styles.ContenedorDeTextoCentral}><Text style={styles.TextoCentralDeLaTemp}>{datos.esHoy ? "AHORA" : "MEDIA"}</Text></View>
                            <View style={styles.ContenedorDeTextoLateral}><Text style={styles.TextoLateralDeLaTemp}>MAX</Text></View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}