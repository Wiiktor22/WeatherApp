import React from 'react';
import styled from 'styled-components';
import SingleItem from './SingleItem';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 24vh;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
    padding: 0 2vw;
`;

const NextHourSection = ({ data }) => {
    const date = new window.Date();
    let i = 1;
    const getHour = () => {
        let hour = date.getHours() + i;
        i++;
        if (hour > 24) {
            return hour - 24;
        } else {
            return hour;
        }
    }
    return ( 
        <Wrapper>
            {data.map(item => (
                <SingleItem
                    key={i}
                    time={getHour()}
                    icon={item.icon}
                    temp={item.temperature}
                />
            ))}
        </Wrapper>
    );
}
 
export default NextHourSection;