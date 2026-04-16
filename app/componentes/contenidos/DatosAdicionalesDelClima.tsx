import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props { Icono: any; valor: number; unidad: string; }

export function DatosAdicionalesDeClima({ Icono, valor, unidad }: Props) {
    return (
        <View style={styles.container}>
            <Icono size={30} color="black" />
            <Text style={styles.texto}>{valor}{unidad}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: "row", alignItems: "center", gap: 12 },
    texto: { fontWeight: "bold", fontSize: 18 }
});