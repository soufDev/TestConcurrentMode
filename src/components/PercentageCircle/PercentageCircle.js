import React from "react";
import {
  Circle,
  LeftWrap,
  Loader,
  SecondLoader,
  InnerCirle,
  Text
} from "./PercentageCircle.styled";

import { usePercent } from "../customHooks";

export const PercentageCircle = React.memo(
  ({
    percent,
    radius,
    bgcolor,
    color,
    borderWidth,
    innerColor,
    step,
    delay
  }) => {
    const {
      leftTransformerDegree,
      rightTransformerDegree,
      progress
    } = usePercent(percent, step, delay);

    const circleStyle = React.useMemo(
      () => ({
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        backgroundColor: bgcolor
      }),
      [radius, bgcolor]
    );

    const leftWrapStyle = React.useMemo(
      () => ({
        width: radius,
        height: radius * 2,
        left: 0
      }),
      [radius]
    );

    const laoderStyle = React.useMemo(
      () => ({
        left: radius,
        width: radius,
        height: radius * 2,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: color,
        transform: `rotate(${leftTransformerDegree})`
      }),
      [radius, color, leftTransformerDegree]
    );

    const secondLoaderStyle = React.useMemo(
      () => ({
        left: -radius,
        width: radius,
        height: radius * 2,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: color,
        transform: `rotate(${rightTransformerDegree})`
      }),
      [radius, color, rightTransformerDegree]
    );

    const innerCirleStyle = React.useMemo(
      () => ({
        left: borderWidth,
        top: borderWidth,
        width: (radius - borderWidth) * 2,
        height: (radius - borderWidth) * 2,
        borderRadius: radius - borderWidth,
        backgroundColor: innerColor
      }),
      [borderWidth, radius, innerColor]
    );

    const rightWrapStyle = React.useMemo(
      () => ({
        width: radius,
        height: radius * 2,
        left: radius
      }),
      [radius]
    );

    const textColor = React.useMemo(
      () => ({
        color
      }),
      [color]
    );

    return (
      <Circle style={circleStyle}>
        <Circle />
        <LeftWrap style={leftWrapStyle}>
          <Loader style={laoderStyle} />
        </LeftWrap>
        <LeftWrap style={rightWrapStyle}>
          <SecondLoader style={secondLoaderStyle} />
        </LeftWrap>
        <InnerCirle style={innerCirleStyle}>
          <Text style={textColor}>{progress}%</Text>
        </InnerCirle>
      </Circle>
    );
  }
);

PercentageCircle.defaultProps = {
  color: "#000",
  radius: 20,
  percent: 0,
  borderWidth: 2,
  bgcolor: "#e3e3e3",
  innerColor: "#fff",
  step: 1,
  delay: 10
};
