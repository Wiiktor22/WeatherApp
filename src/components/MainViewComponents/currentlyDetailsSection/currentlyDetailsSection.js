import React from 'react';
import styled, { css } from 'styled-components';

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
    const defineWindDirection = direction => {
        if (direction >= 22 && direction < 67) {
            return 'NE'
        } else if (direction >= 67 && direction < 112) {
            return 'E'
        } else if (direction >= 112 && direction < 157) {
            return 'SE'
        } else if (direction >= 157 && direction < 202) {
            return 'S'
        } else if (direction >= 202 && direction < 247) {
            return 'SW'
        } else if (direction >= 247 && direction < 292) {
            return 'W'
        } else if (direction >= 292 && direction < 337) {
            return 'NW'
        } else {
            return 'N'
        }
    }
    return ( 
        <Wrapper>
            <Information>
                <Text>Wilgotność</Text>
                <Text info>{data.humidity * 100}%</Text>
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
                <Text info>{data.precipProbability * 100}%</Text>
            </Information>
            <Information>
                <Text>Pokrycie chmur</Text>
                <Text info>{data.cloudCover * 100}%</Text>
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