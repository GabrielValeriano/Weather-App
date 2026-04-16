import { StatusBar } from 'expo-status-bar';
import { Droplet, Gauge, Wind, ChevronLeft, ChevronRight } from 'lucide-react-native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface DiaClima {
    fecha: string;
    tempMin: number;
    tempMax: number;
    tempActual: number;
    humedad: number;
    presion: number;
    viento: number;
    weatherCode: number;
}

const obtenerImagenClima = (codigo: number) => {
    if (codigo === 0) return require("../assets/images/despejado.png");
    if (codigo >= 1 && codigo <= 3) return require("../assets/images/nube.png");
    if (codigo >= 4 && codigo <= 48) return require("../assets/images/niebla.png");
    if (codigo >= 49 && codigo <= 69) return require("../assets/images/lluvia.png");
    if (codigo >= 70 && codigo <= 79) return require("../assets/images/nieve.png");
    if (codigo >= 80 && codigo <= 84) return require("../assets/images/lluvia.png");
    if (codigo >= 85 && codigo <= 94) return require("../assets/images/nieve.png");
    if (codigo >= 95 && codigo <= 99) return require("../assets/images/tormenta.png");
    return require("../assets/images/nube.png");
};

export default function HomeScreen() {
    const [pronostico, setPronostico] = useState<DiaClima[]>([]);
    const [indiceDia, setIndiceDia] = useState(1);
    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=-34.6751&longitude=-58.4621&daily=temperature_2m_max,temperature_2m_min,relative_humidity_2m_mean,temperature_2m_mean,surface_pressure_mean,wind_speed_10m_mean,weather_code&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,weather_code&timezone=auto&past_days=1&forecast_days=2`;
            const response = await fetch(url);
            const data = await response.json();

            const diasMapeados: DiaClima[] = data.daily.time.map((fechaRaw: string, index: number) => {
                const fechaDate = new Date(fechaRaw + "T00:00:00");
                const esHoy = index === 1;
                return {
                    fecha: `${fechaDate.getDate()}/${fechaDate.getMonth() + 1}`,
                    tempMin: Math.round(data.daily.temperature_2m_min[index]),
                    tempMax: Math.round(data.daily.temperature_2m_max[index]),
                    tempActual: esHoy ? Math.round(data.current.temperature_2m) : Math.round(data.daily.temperature_2m_mean[index]),
                    humedad: esHoy ? Math.round(data.current.relative_humidity_2m) : Math.round(data.daily.relative_humidity_2m_mean[index]),
                    presion: esHoy ? Math.round(data.current.surface_pressure) : Math.round(data.daily.surface_pressure_mean[index]),
                    viento: esHoy ? Math.round(data.current.wind_speed_10m) : Math.round(data.daily.wind_speed_10m_mean[index]),
                    weatherCode: esHoy ? data.current.weather_code : data.daily.weather_code[index],
                };
            });
            setPronostico(diasMapeados);
            setCargando(false);
        } catch (error) {
            console.error(error);
            setCargando(false);
        }
    };

    const irAlAnterior = () => { if (indiceDia > 0) setIndiceDia(indiceDia - 1); };
    const irAlSiguiente = () => { if (indiceDia < pronostico.length - 1) setIndiceDia(indiceDia + 1); };

    if (cargando || pronostico.length === 0) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#000" />
                <Text style={{ marginTop: 10 }}>Cargando Lugano...</Text>
            </View>
        );
    }

    const diaActual = pronostico[indiceDia];

    return (
        <View style={styles.mainWrapper}>
            <StatusBar style='light' />
            <Image blurRadius={20} source={require("../assets/images/fondo.png")} style={styles.backgroundImage} />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.ContenedorDatos}>
                    <View style={styles.ContenedorNavegacion}>
                        <View style={styles.WrapperNavSide}>
                            <TouchableOpacity onPress={irAlAnterior} style={{ opacity: indiceDia === 0 ? 0.1 : 1 }}>
                                <View style={styles.Navegacion}>
                                    <ChevronLeft color="black" size={20} />
                                    <Text style={styles.textoNavChico}>{indiceDia > 0 ? pronostico[indiceDia - 1].fecha : ""}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.WrapperNavCenter}><Text style={styles.textoFechaPrincipal}>{diaActual.fecha}</Text></View>
                        <View style={styles.WrapperNavSide}>
                            <TouchableOpacity onPress={irAlSiguiente} style={{ opacity: indiceDia === pronostico.length - 1 ? 0.1 : 1 }}>
                                <View style={[styles.Navegacion, { justifyContent: 'flex-end' }]}>
                                    <Text style={styles.textoNavChico}>{indiceDia < pronostico.length - 1 ? pronostico[indiceDia + 1].fecha : ""}</Text>
                                    <ChevronRight color="black" size={20} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.ContenedorTextoCiudad}><Text style={styles.TextoCiudad}>VILLA LUGANO</Text></View>
                    <View><Image source={obtenerImagenClima(diaActual.weatherCode)} style={styles.mainImage} resizeMode="contain" /></View>
                    <View style={styles.ContenedorDatosAdicionales}>
                        <View style={styles.Items}><Droplet size={30} /><Text style={styles.textoMetrica}>{diaActual.humedad}%</Text></View>
                        <View style={styles.Items}><Gauge size={30} /><Text style={styles.textoMetrica}>{diaActual.presion} hPa</Text></View>
                        <View style={styles.Items}><Wind size={30} /><Text style={styles.textoMetrica}>{diaActual.viento} km/h</Text></View>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.ContenedorPronostico}>
                            <View style={styles.WrapperTempLateral}><Text style={styles.TextoTempSecundaria}>{diaActual.tempMin}°</Text></View>
                            <View style={styles.WrapperTempCentral}><Text style={styles.TextoTempPrincipal}>{diaActual.tempActual}°</Text></View>
                            <View style={styles.WrapperTempLateral}><Text style={[styles.TextoTempSecundaria, { textAlign: 'right' }]}>{diaActual.tempMax}°</Text></View>
                        </View>
                        <View style={styles.labelsRow}>
                            <View style={styles.WrapperLabelLateral}><Text style={styles.labelSub}>MIN</Text></View>
                            <View style={styles.WrapperLabelCentral}><Text style={styles.labelMain}>{indiceDia === 1 ? "NOW" : "AVG"}</Text></View>
                            <View style={styles.WrapperLabelLateral}><Text style={styles.labelSub}>MAX</Text></View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainWrapper: { flex: 1 },
    backgroundImage: { position: 'absolute', height: '100%', width: '100%' },
    loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
    safeArea: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    ContenedorDatos: { backgroundColor: "white", width: "88%", height: "90%", padding: 20, borderRadius: 40, alignItems: "center", justifyContent: "space-between", elevation: 8 },
    ContenedorNavegacion: { flexDirection: "row", width: "100%", alignItems: "center" },
    WrapperNavSide: { flex: 1 },
    WrapperNavCenter: { flex: 1, alignItems: 'center' },
    textoFechaPrincipal: { fontWeight: 'bold', fontSize: 18 },
    textoNavChico: { fontSize: 12, fontWeight: '500', opacity: 0.3 },
    Navegacion: { flexDirection: "row", alignItems: "center" },
    ContenedorTextoCiudad: { paddingVertical: 5 },
    TextoCiudad: { fontSize: 24, fontWeight: '900', letterSpacing: 1 },
    mainImage: { width: 200, height: 200 },
    ContenedorDatosAdicionales: { alignSelf: "flex-start", gap: 15, paddingLeft: 10 },
    Items: { flexDirection: "row", alignItems: "center", gap: 12 },
    textoMetrica: { fontWeight: "bold", fontSize: 18 },
    footer: { width: '100%'},
    ContenedorPronostico: { flexDirection: "row", width: "100%", alignItems: 'baseline' },
    labelsRow: { flexDirection: 'row', width: '100%', marginTop: -5 },
    WrapperTempLateral: { flex: 1, alignItems: "center" },
    WrapperTempCentral: { flex: 2, alignItems: 'center' },
    WrapperLabelLateral: { flex: 1, alignItems: "center" },
    WrapperLabelCentral: { flex: 2, alignItems: 'center' },
    TextoTempPrincipal: { fontSize: 80, fontWeight: '900', includeFontPadding: false },
    TextoTempSecundaria: { fontSize: 24, fontWeight: 'bold', opacity: 0.2 },
    labelMain: { fontSize: 18, fontWeight: '900', letterSpacing: 2 },
    labelSub: { fontSize: 14, fontWeight: 'bold', opacity: 0.2 }
});