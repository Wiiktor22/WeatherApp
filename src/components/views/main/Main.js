import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { GeoLocationContext } from '../../../context/GeoLocationContext';
import { key } from './../../../config/config';
import TodayPanel from './../../elements/todayPanel/todayPanel';
import ReferenceSection from '../../MainViewComponents/referenceSection/referenceSection';
import NextHourSection from '../../MainViewComponents/nextHourSection/nextHourSection';
import CurrentlyDetailSection from '../../MainViewComponents/currentlyDetailsSection/currentlyDetailsSection';
import Loading from '../loading/Loading';
import { geolocated } from "react-geolocated";

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

const Animation = styled.div`
    animation: .6s showOn ease-out;
    @keyframes showOn {
        from {
            transform: scale(.7);
        } to {
            transform: scale(1);
        }
    }
`;

const Main = (props) => {
    const { lat, long, getLocation } = useContext(GeoLocationContext)
    const [data, setData] = useState('');
    const [updateLocation, setUpdateLocation] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const url = `${proxy}https://api.darksky.net/forecast/${key}/${lat},${long}?lang=pl&units=ca`;
            const response = await fetch(url);
            const downloadedData = await response.json();
            setData(downloadedData);
        }
        fetchData();
    }, [lat, long])

    const prepareDataForNHS = () => {
        const preparedData = data.hourly.data;
        preparedData.length = 8;
        return preparedData
    }

    //Download current Location
    const checkForUpdateLocation = () => {
        console.log("Jestem w funkcji")
        if (props.coords !== null && !updateLocation) {
            setUpdateLocation(!updateLocation);
        }
    }
    useEffect(() => {
        console.log("Efekt")
        if (updateLocation) getLocation();
    }, [updateLocation])


    return ( 
        <Wrapper>
            {checkForUpdateLocation()}
            {(lat != '0' && data) ? (
                <Animation>
                    <TodaySection>
                        <TodayPanel icon={data.currently.icon} temp={data.currently.temperature} aTemp={data.currently.apparentTemperature}/>
                    </TodaySection>
                    <ReferenceSection />
                    <NextHourSection data={prepareDataForNHS()}/>
                    <CurrentlyDetailSection data={data.currently}/>
                </Animation>
            ) : (
                <Loading />
            )}
        </Wrapper>
    );
}
 
export default geolocated()(Main);