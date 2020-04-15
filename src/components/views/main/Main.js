import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { GeoLocationContext } from '../../../context/GeoLocationContext';
import { key } from './../../../config/config';
import TodayPanel from './../../elements/todayPanel/todayPanel';

const Wrapper = styled.div`
    width: 100%;
`;

const TodaySection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
    padding-bottom: 2vh;
`;

const Main = () => {
    const { lat, long } = useContext(GeoLocationContext)
    const [data, setData] = useState('');

    useEffect(() => {
        async function fetchData() {
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const url = `${proxy}https://api.darksky.net/forecast/${key}/${lat},${long}?lang=pl&units=ca`;
            const response = await fetch(url);
            const downloadedData = await response.json();
            setData(downloadedData);
        }
        fetchData();
    }, [])

    return ( 
        <Wrapper>
            <TodaySection>
                {data && <TodayPanel icon={data.currently.icon} temp={data.currently.temperature} aTemp={data.currently.apparentTemperature}/>}
            </TodaySection>
        </Wrapper>
    );
}
 
export default Main;