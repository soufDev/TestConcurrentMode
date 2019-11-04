import styled from 'styled-components';

export const StyledImage = styled.img`
    height: 40vh;
    width: 25vh;
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledContentContainer = styled.div`
    width: 45vh;
    margin-left: 10px;
`;

export const StyledSummaryTitle = styled.h1`
    color: ${({ theme }) => theme.white};
    font-size: 24px;
    font-weight: 400;
`;

export const StyledSummaryContent = styled.p`
    color: ${({ theme }) => theme.white};
    font-size: 18px;
    font-weight: 200;
`;