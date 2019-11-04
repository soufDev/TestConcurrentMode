import styled from 'styled-components';

export const StyledStatsWrapper = styled.div`
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledDescriptionText = styled.h1`
    font-size: 20px;
    font-weight: 200;
    color: ${({ theme }) => theme.white};
`;