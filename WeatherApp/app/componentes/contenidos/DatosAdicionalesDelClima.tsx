import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props { Icono: any; valor: number; unidad: string; }

export function DatosAdicionalesDeClima({ Icono, valor, unidad }: Props) {
    return (
        <View style={styles.container}>
            <Icono size={30} color="black" />
            <Text style={styles.Valor}>{valor}</Text>
            <Text style={styles.Unidad}>{unidad}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: "row", alignItems: "center", gap: 4 },
    Valor: { fontWeight: "bold", fontSize: 18,},
    Unidad: { fontSize: 15, fontWeight: "bold", opacity: 0.3}
});