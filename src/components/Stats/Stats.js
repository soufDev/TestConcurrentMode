import React from "react";
import PercentageCircle from "../PercentageCircle";
import theme from "../../theme";
import { StyledStatsWrapper, StyledDescriptionText } from "./Stats.styled";
import useSWR from "swr";
import { fetchStats } from "./Stats.api";

export const Stats = () => {
  const { data } = useSWR("/stats", fetchStats, { suspense: true });
  return (
    <StyledStatsWrapper>
      <PercentageCircle
        radius={100}
        borderWidth={10}
        percent={data}
        color={theme.green}
        delay={50}
      />
      <StyledDescriptionText>Apps using React</StyledDescriptionText>
    </StyledStatsWrapper>
  );
};
