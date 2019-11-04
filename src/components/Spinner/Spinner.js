import React from 'react';
import spinner from './spinner.svg';
import { StyledImg, StyleWrapperSpinner } from './Spinner.Styled';

export const Spinner = () => (
    <StyleWrapperSpinner>
        <StyledImg src={spinner} />
    </StyleWrapperSpinner>
)