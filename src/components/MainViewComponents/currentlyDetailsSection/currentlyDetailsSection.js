import React from 'react';
import styled, { css } from 'styled-components';
import { defineWindDirection } from './../../elements/functions';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 8vh);
    padding: 2vh 3vw 0;
`;

const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.p`
    text-transform: uppercase;
    font-weight: 300;
    ${({ info }) => (
        info && css`
            font-weight: 500;
            text-transform: none;
            font-size: 1.5rem;
        `
    )}
`;

const CurrentlyDetailSection = ({ data }) => {
    return ( 
        <Wrapper>
            <Information>
                <Text>Wilgotność</Text>
                <Text info>{Math.round(data.humidity * 100)}%</Text>
            </Information>
            <Information>
                <Text>Ciśnienie</Text>
                <Text info>{Math.round(data.pressure)} hPa</Text>
            </Information>
            <Information>
                <Text>Wiatr</Text>
                <Text info>{Math.round(data.visibility)} km/h</Text>
            </Information>
            <Information>
                <Text>Kierunek wiatru</Text>
                <Text info>{defineWindDirection(data.windBearing)}</Text>
            </Information>
            <Information>
                <Text>Możliwe opady</Text>
                <Text info>{Math.round(data.precipProbability * 100)}%</Text>
            </Information>
            <Information>
                <Text>Pokrycie chmur</Text>
                <Text info>{Math.round(data.cloudCover * 100)}%</Text>
            </Information>
            <Information>
                <Text>Widoczność</Text>
                <Text info>{Math.round(data.visibility)} km</Text>
            </Information>
            <Information>
                <Text>indeks uv</Text>
                <Text info>{Math.round(data.uvIndex)}</Text>
            </Information>
        </Wrapper>
    );
}
 
export default CurrentlyDetailSection;