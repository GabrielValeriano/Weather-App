import { Circle, Waves, ShipWheel, Kanban, Cloudy, Zap} from 'lucide-react-native';


export const obtenerImagenClima = (codigo: number) => {
    // Usamos 'size' y 'color' porque son componentes de React Native ahora
    if (codigo === 0) return <Circle  size={350} />;
    if (codigo >= 1 && codigo <= 3) return <Cloudy size={350} />;
    if (codigo >= 4 && codigo <= 48) return <Waves color="white" size={350} />;
    if (codigo >= 49 && codigo <= 69) return <Kanban color="blue" size={350} />;
    if (codigo >= 70 && codigo <= 79) return <ShipWheel color="lightblue" size={350} />;
    if (codigo >= 80 && codigo <= 84) return <Kanban color="blue" size={350} />;
    if (codigo >= 85 && codigo <= 94) return <ShipWheel color="lightblue" size={350} />;
    if (codigo >= 95 && codigo <= 99) return <Zap color="orange" size={350} />;
    return <Cloudy color="gray" size={350} />;
};