import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { GeoLocationContext } from '../../../../context/GeoLocationContext';

const Text = styled.p`
    font-size: 1.3rem;
    font-weight: 500;
`;

const Location = () => {
    const [location, setLocation] = useState('');
    const { lat, long } = useContext(GeoLocationContext);
    useEffect(() => {
        async function fetchData() {
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyAW0tnVQ4-ezK2M9Lq-CDhFWJFn8-JuyCQ`;
            const response = await fetch(url);
            const data = await response.json();
            setLocation(data.plus_code.compound_code);
        }
        fetchData();
    }, [])

    return ( 
        <>
            {location && <Text>{location.slice(8, location.length)}</Text>}
        </>
    );
}
 
export default Location;