import styled from 'styled-components';

export const Animation = styled.div`
    animation: .6s showOn ease-out;
    @keyframes showOn {
        from {
            transform: scale(.7);
        } to {
            transform: scale(1);
        }
    }
`;