import React, { useContext } from 'react';
import styled from 'styled-components';
import BackIcon from './../../../assets/back.png';
import TomorrowSection from '../../NextViewComponents/tomorrowSection/tomorrowSection';
import DaySection from '../../NextViewComponents/daySection/DaySection';
import { DataForNextSectionContext } from '../../../context/DataForNextSectionContext';
import { Animation } from './../../elements/animationWrapper/Animation';

const Wrapper = styled.div`
    width: 100%;
    max-height: 100vh;
`;

const IconWrapper = styled.img`
    margin-top: 4vh;
    width: 20px;
    height: 20px;
`;

const Next = props => {
    const { data } = useContext(DataForNextSectionContext);
    const dataForDaySection = data.filter((item, index) => index !== 0);
    const date = new window.Date();
    const day = date.getDay();

    return ( 
        <Wrapper>
            <Animation>
            <IconWrapper src={BackIcon} onClick={() => props.history.goBack()} />
            <TomorrowSection data={data[0]}/>
            {dataForDaySection.map((item, index) => (
                <DaySection data={item} day={day + index + 2} key={index}/>
            ))}
            </Animation>
        </Wrapper>
    );
}
 
export default Next;