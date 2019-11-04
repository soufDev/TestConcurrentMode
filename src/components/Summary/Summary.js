import React from 'react';
import { StyledImage, StyledContainer, StyledSummaryTitle, StyledContentContainer, StyledSummaryContent } from './Summary.styled';
import { resourceSummary } from '../../api';

const resource = resourceSummary('/api/summary');
export const Summary = () => {
    const data = resource.read();
    return (
        <StyledContainer>
            <StyledImage src={data.imageUrl} alt="summary" />
            <StyledContentContainer>
                <StyledSummaryTitle>{data.headerTitle}</StyledSummaryTitle>
                <StyledSummaryContent>{data.content}</StyledSummaryContent>
            </StyledContentContainer>
        </StyledContainer>
    )
}