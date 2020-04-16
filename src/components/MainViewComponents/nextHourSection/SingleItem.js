import React from 'react';
import styled from 'styled-components';
import { getIcon } from './../../elements/functions';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 90%;
    border-radius: 35px;
    background-color: ${({ color }) => color};
    box-shadow: 0 0 12px rgba(115,165,217,.8);
    margin-right: 4vw;
    padding: 0 2vw;
`;

const Text = styled.p`
    font-size: 1.1rem;
    font-weight: 300;
`;

const Img = styled.img`
    height: 6vh;
    width: auto;
`;

const SingleItem = ({ time, icon, temp }) => {
    const date = new Date();
    const defineColor = () => {
        if (date.getHours() >= 7 && date.getHours() <= 20) {
            return '#83baf3';
        } else {
            return '#1E1D45';
        }
    }
    
    return ( 
        <Wrapper color={defineColor()}>
            <Text>{time}:00</Text>
            <Img src={getIcon(icon)} />
            <Text>{Math.round(temp)}°</Text>
        </Wrapper>
    );
}
 
export default SingleItem;