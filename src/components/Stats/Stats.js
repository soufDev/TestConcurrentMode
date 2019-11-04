import React from 'react';
import PercentageCircle from '../PercentageCircle';
import theme from '../../theme';
import { StyledStatsWrapper, StyledDescriptionText } from './Stats.styled';
import { resourceStats } from '../../api';

const resource = resourceStats('/stats');

export const Stats = () => {
    const data = resource.read()
    return (
        <StyledStatsWrapper>
            <PercentageCircle
                radius={100}
                borderWidth={10}
                percent={data}
                color={theme.green}
            />
            <StyledDescriptionText>Apps using React</StyledDescriptionText>
        </StyledStatsWrapper>
    );
}