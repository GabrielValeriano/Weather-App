import { styles } from "@/src/clima/estilos/estilosDelIndex"
import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context"

const LayoutPantallaPrincipal = ({children}: PropsWithChildren) =>{
    return (
        <SafeAreaView style={styles.ContenedorDatos}>
            {children}
        </SafeAreaView>
    );
};

export default LayoutPantallaPrincipal;