import { useState, useEffect } from 'react';
import { DiaClima } from '../tipos/clima';

export function usePronosticoClima() {
    const [pronostico, setPronostico] = useState<DiaClima[]>([]);
    const [indiceDia, setIndiceDia] = useState(1);
    const [cargando, setCargando] = useState(true);

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
        } catch (error) {
            console.error(error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => { fetchWeatherData(); }, []);

    const irAlAnterior = () => { if (indiceDia > 0) setIndiceDia(indiceDia - 1); };
    const irAlSiguiente = () => { if (indiceDia < pronostico.length - 1) setIndiceDia(indiceDia + 1); };

return { 
        diaActual: pronostico[indiceDia], 
        estaCargando: cargando || pronostico.length === 0,
        datos: {
            // Usamos ?. para que si no existe el elemento, devuelva undefined en lugar de romper
            Diaanterior: (indiceDia > 0 && pronostico[indiceDia - 1]) ? pronostico[indiceDia - 1].fecha : "",
            Diasiguiente: (indiceDia < pronostico.length - 1 && pronostico[indiceDia + 1]) ? pronostico[indiceDia + 1].fecha : "",
            esHoy: indiceDia === 1,
            cantidadDias: pronostico.length,
            indiceDia
        },
        acciones: { irAlAnterior, irAlSiguiente }
    };
}