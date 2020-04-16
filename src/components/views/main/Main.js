import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { GeoLocationContext } from '../../../context/GeoLocationContext';
import { key } from './../../../config/config';
import TodayPanel from './../../elements/todayPanel/todayPanel';
import ReferenceSection from '../../MainViewComponents/referenceSection/referenceSection';
import NextHourSection from '../../MainViewComponents/nextHourSection/nextHourSection';
import CurrentlyDetailSection from '../../MainViewComponents/currentlyDetailsSection/currentlyDetailsSection';

const Wrapper = styled.div`
    width: 100%;
    height: max-100vh;
`;

const TodaySection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
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

    const prepareDataForNHS = () => {
        const preparedData = data.hourly.data;
        preparedData.length = 8;
        return preparedData
    }

    return ( 
        <Wrapper>
            <TodaySection>
                {data && <TodayPanel icon={data.currently.icon} temp={data.currently.temperature} aTemp={data.currently.apparentTemperature}/>}
            </TodaySection>
            <ReferenceSection />
            {data && <NextHourSection data={prepareDataForNHS()}/>}
            {data && <CurrentlyDetailSection data={data.currently}/>}
        </Wrapper>
    );
}
 
export default Main;