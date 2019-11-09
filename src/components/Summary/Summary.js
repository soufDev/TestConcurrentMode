import React from "react";
import {
  StyledImage,
  StyledContainer,
  StyledSummaryTitle,
  StyledContentContainer,
  StyledSummaryContent
} from "./Summary.styled";
import useSWR from "swr";
import { fetchSummary } from "./Summary.api";

export const Summary = () => {
  const { data } = useSWR("/summary", fetchSummary, { suspense: true });
  return (
    <StyledContainer>
      <StyledImage src={data.imageUrl} alt="summary" />
      <StyledContentContainer>
        <StyledSummaryTitle>{data.headerTitle}</StyledSummaryTitle>
        <StyledSummaryContent>{data.content}</StyledSummaryContent>
      </StyledContentContainer>
    </StyledContainer>
  );
};
