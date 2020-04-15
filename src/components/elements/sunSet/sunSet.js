import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GeoLocationContext } from '../../../context/GeoLocationContext';

const Text = styled.p`
    font-size: 1.1rem;
    font-weight: 300;
    margin-left: 3vw;
`;

const SunSet = () => {
    const { lat, long } = useContext(GeoLocationContext);
    const date = new window.Date();
    const currentHour = date.getHours();
    const currentMin = date.getMinutes();
    
    const [data, setData] = useState('');

    useEffect(() => {
        async function fetchData() {
            const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [])

    const defineContent = () => {
        const indexRise = data.results.sunrise.indexOf(':');
        const sunRiseHour = data.results.sunrise.slice(0, indexRise);
        const indexSet = data.results.sunset.indexOf(':');
        const sunSetHour = data.results.sunset.slice(0, indexSet);
        const preparedSunSetHour = (sunsetHour) => {
            switch (sunsetHour) {
                case 1:
                    return 13;
                case 2:
                    return 14;
                case 3:
                    return 15;
                case 4:
                    return 16;
                case 5:
                    return 17;
                case 6:
                    return 18;
                case 7:
                    return 19;
                case 8:
                    return 20;
                case 9:
                    return 21;
                case 10:
                    return 22;
                case 11:
                    return 23;
                default: 
                    return 0;
            }
        }
        console.log(sunRiseHour, preparedSunSetHour(sunSetHour))
        if (currentHour > sunRiseHour && currentHour < preparedSunSetHour(sunSetHour)) {
            return 'Zachód: '
        } else {
            return 'Wschód: '
        }
    }

    const defineTime = () => {
        const sunRiseHour = data.results.sunrise;
        const sunSetHour = data.results.sunset;
        if (currentHour > sunRiseHour && currentHour < sunSetHour) {
            return sunSetHour
        } else {
            return sunRiseHour
        }
    }

    return ( 
        <>
            {data && <Text>{defineContent()}</Text>}
        </>
    );
}
 
export default SunSet;