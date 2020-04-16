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
    const [data, setData] = useState('');

    useEffect(() => {
        async function fetchData() {
            const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=today`;
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
        
        const sunRiseMinute = data.results.sunrise.slice(indexRise + 1, indexRise + 3);
        const sunSetMinute = data.results.sunset.slice(indexSet + 1, indexSet + 3);
        
        const preparedSunSetHour = sunsetHour => {
            switch (sunsetHour) {
                case '1':
                    return 15;
                case '2':
                    return 16;
                case '3':
                    return 17;
                case '4':
                    return 18;
                case '5':
                    return 19;
                case '6':
                    return 20;
                case '7':
                    return 21;
                case '8':
                    return 22;
                case '9':
                    return 23;
                case '10':
                    return 24;
                case '11':
                    return 1;
                default: 
                    return 0;
            }
        }
        const preparedSunRiseHour = parseInt(sunRiseHour);
        const responseSunRise = `Wschód: ${preparedSunRiseHour + 2}:${sunRiseMinute}`;
        const responseSunSet = `Zachód: ${preparedSunSetHour(sunSetHour)}:${sunSetMinute}`;
        if (currentHour > (preparedSunRiseHour + 2) && currentHour < preparedSunSetHour(sunSetHour)) {
            return responseSunSet
        } else {
            return responseSunRise
        }
    }

    return ( 
        <>
            {data && <Text>{defineContent()}</Text>}
        </>
    );
}
 
export default SunSet;