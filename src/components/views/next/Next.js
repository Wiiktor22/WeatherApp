import React, { useContext } from 'react';
import styled from 'styled-components';
import TomorrowSection from '../../NextViewComponents/tomorrowSection/tomorrowSection';
import DaySection from '../../NextViewComponents/daySection/DaySection';
import { DataForNextSectionContext } from '../../../context/DataForNextSectionContext';
import { Animation } from './../../elements/animationWrapper/Animation';

const Wrapper = styled.div`
    width: 100%;
    max-height: 100vh;
    margin-top: 5vh;
`;

const Next = () => {
    const { data } = useContext(DataForNextSectionContext);
    const dataForDaySection = data.filter((item, index) => index !== 0);
    const date = new window.Date();
    const day = date.getDay();

    return ( 
        <Wrapper>
            <Animation>
                <TomorrowSection data={data[0]}/>
                {dataForDaySection.map((item, index) => (
                    <DaySection data={item} day={day + index + 2} key={index}/>
                ))}
            </Animation>
        </Wrapper>
    );
}
 
export default Next;