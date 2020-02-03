import React from "react";
import PercentageCircle from "../PercentageCircle";
import theme from "../../theme";
import { StyledStatsWrapper, StyledDescriptionText } from "./Stats.styled";
import { useQuery } from "react-query";
import { fetchStats } from "./Stats.api";

const StatsComponent = () => {
  const { data } = useQuery("stats", fetchStats, { suspense: true });
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

export const Stats = React.memo(StatsComponent);
