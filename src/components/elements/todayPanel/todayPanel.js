import React from 'react';
import styled, { css } from 'styled-components';
import { getIcon, defineDay, defineMonth } from '../functions';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const FirstLine = styled.div`
    display: flex;
    height: 8vh;
`;

const ImgWrapper = styled.img`
    height: 100%;
    width: auto;
    margin-right: 2vw;
`;

const Date = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Text = styled.p`
    font-size: 1.1rem;
    font-weight: 300;

    ${({ large }) => (
        large && css`
            font-size: 1.6rem;
            font-weight: 500;
        `
    )}
`;

const TodayPanel = ({ icon }) => {
    const date = new window.Date();
    const day = date.getDay();
    const month = date.getMonth();
    return ( 
        <Wrapper>
            <FirstLine>
                <ImgWrapper src={getIcon(icon)} />
                <Date>
                    <Text large>Dziś</Text>
                    <Text>{defineDay(day)}, {date.getDate()} {defineMonth(month)}</Text>
                </Date>
            </FirstLine>
        </Wrapper>
    );
}
 
export default TodayPanel;