import React from 'react';
import styled, { css } from 'styled-components';
import { getIcon, defineDay } from './../../elements/functions';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    height: 8vh;
    margin: 0 auto;
    padding: 0 4vw;
    border-top: 1px solid white;
    :nth-last-of-type(1) {
        border-bottom: 1px solid white;
    }
`;

const Icon = styled.img`
    margin-left: 8vw;
    height: 40px;
    width: 40px;
`;

const Temperature = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    ${({ margin }) => (
        margin && css`
            margin-left: 4vw;
        `
    )}
`;

const DaySection = ({ data, day }) => {
    const getCorrectDay = number => {
        if (day >= 7){
            return number - 7
        } else {
            return number
        }
    }
    return ( 
        <Wrapper>
            <div>
                <Text>{defineDay(getCorrectDay(day))}</Text>
            </div>
            <Temperature>
                <Icon src={getIcon(data.icon)} />
                <Text margin>{Math.round(data.temperatureMin)}°</Text>
                <Text margin>{Math.round(data.temperatureMax)}°</Text>
            </Temperature>
        </Wrapper>
    );
}
 
export default DaySection;