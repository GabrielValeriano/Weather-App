import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    ContenedorMain: { 
        flex: 1 
    },
    backgroundImage: { 
        position: 'absolute', 
        height: '100%', 
        width: '100%' 
    },
    loaderContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white' 
    },
    safeArea: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    ContenedorDatos: { 
        backgroundColor: "white", 
        width: "88%", 
        height: "90%", 
        padding: 20, 
        borderRadius: 40, 
        alignItems: "center", 
        justifyContent: "space-between", 
        elevation: 8 
    },
    ContenedorNavegacion: { 
        flexDirection: "row", 
        width: "100%", 
        justifyContent: 'space-between', 
        alignItems: "center" 
    },
    Navegacion: { 
        flexDirection: "row", 
        alignItems: "center", 
        width: 60 
    },
    textoFechaPrincipal: { 
        fontWeight: 'bold', 
        fontSize: 18 
    },
    textoNavChico: { 
        fontSize: 12, 
        fontWeight: '500', 
        opacity: 0.3 
    },
    TextoCiudad: { 
        fontSize: 24, 
        fontWeight: '900', 
        letterSpacing: 1 
    },
    mainImage: { 
        width: 200, 
        height: 200 
    },
    ContenedorDatosAdicionales: { 
        alignSelf: "flex-start", 
        gap: 15, 
        paddingLeft: 10 
    },
    ContenedorPrincipalDelPronostico: { width: '100%'},
    ContenedorPronostico: { flexDirection: "row", width: "100%", alignItems: 'baseline' },
    ContenedorDeTextoPronostico: { flexDirection: 'row', width: '100%', marginTop: -5 },
    ContenedorDeTempLateral: { flex: 1, alignItems: "center" },
    ContenedorDeTempCentral: { flex: 2, alignItems: 'center' },
    ContenedorDeTextoLateral: { flex: 1, alignItems: "center" },
    ContenedorDeTextoCentral: { flex: 2, alignItems: 'center' },
    TextoTempPrincipal: { fontSize: 80, fontWeight: '900', includeFontPadding: false },
    TextoTempSecundaria: { fontSize: 24, fontWeight: 'bold', opacity: 0.2 },
    TextoCentralDeLaTemp: { fontSize: 22, fontWeight: '900', letterSpacing: 2 },
    TextoLateralDeLaTemp: { fontSize: 18, fontWeight: 'bold', opacity: 0.2 }
});