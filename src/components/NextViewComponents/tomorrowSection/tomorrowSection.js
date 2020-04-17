import React from 'react';
import styled, { css } from 'styled-components';
import { defineDay, getIcon, defineWindDirection } from './../../elements/functions';

const Wrapper = styled.div`
    position: relative;
    height: auto;
    width: 90%;
    margin: 2vh auto 5vh;
    box-shadow: 0 0 12px rgba(115,165,217,.8);
    border-radius: 10px;
    padding: 2vh 4vw;
`;

const TomorrowText = styled.p`
    font-size: 1.7rem;
    margin-top: .2vh;
    ${({ small }) => (
        small && css`
            font-size: 1.2rem;
            font-weight: 300;
        `
    )}
    ${({ temp }) => (
        temp && css`
            font-size: 1.9rem;
            margin-left: 2vw;
        `
    )}
    ${({ mr }) => (
        mr && css`
            margin-right: 2vw;
        `
    )}
`;

const TomorrowIcon = styled.img`
    position: absolute;
    top: 1vh;
    left: 25vw;
    height: 50px;
    width: 50px;
`;

const TomorrowTemperature = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 3vh;
    right: 4vw;
`;

const DetailsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1vh 0;
    margin-top: 3vh;
`;

const Detail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TomorrowSection = ({ data }) => {
    const date = new window.Date();
    const prepareDay = () => {
        const day = date.getDay();
        if ((day + 1) === 7) {
            return 0
        } else {
            return (day + 1)
        }
    }
    

    return ( 
        <Wrapper>
            {console.log(data)}
            <TomorrowText small>jutro</TomorrowText>
            <TomorrowText>{defineDay(prepareDay())}</TomorrowText>
            <TomorrowIcon src={getIcon(data.icon)}/>
            <TomorrowTemperature>
                <TomorrowText small>min</TomorrowText>
                <TomorrowText temp mr>{Math.round(data.temperatureMin)}°</TomorrowText>
                <TomorrowText small>max</TomorrowText>
                <TomorrowText temp>{Math.round(data.temperatureMax)}°</TomorrowText>
            </TomorrowTemperature>
            <DetailsWrapper>
                <Detail>
                    <TomorrowText small>Wiatr</TomorrowText>
                    <TomorrowText>{Math.round(data.windSpeed)} km/h</TomorrowText>
                </Detail>
                <Detail>
                    <TomorrowText small>Ciśnienie</TomorrowText>
                    <TomorrowText>{data.pressure} hPa</TomorrowText>
                </Detail>
                <Detail>
                    <TomorrowText small>Kierunek</TomorrowText>
                    <TomorrowText>{defineWindDirection(data.windBearing)}</TomorrowText>
                </Detail>
                <Detail>
                    <TomorrowText small>Widoczność</TomorrowText>
                    <TomorrowText>{Math.round(data.visibility)} km</TomorrowText>
                </Detail>
            </DetailsWrapper>
        </Wrapper>
    );
}
 
export default TomorrowSection;