import React from "react";
import { spring } from "react-motion";
import { hydrate } from "emotion";
import styled from "@emotion/styled";
import MainLayout from "../MainLayout";

const color = "hotpink";

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}
const SVG = props => {
  return (
    <svg width={props.width} height={props.height}>
      <circle cx="4" cy="4" r="4" fill="darkcyan" />
    </svg>
  );
};
import { StaggeredMotion } from "react-motion";

const colors = [
  "#B3E5FC",
  "#81D4FA",
  "#4FC3F7",
  "#29B6F6",
  "#03A9F4",
  "#039BE5",
  "#0288D1"
];

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

// const Box = styled.div`
//   flex-basis: ${props => {
//     return props.width;
//   }}%;
//   background: ${props => props.bgColor};
// `;

// const ContentWrapper = styled.div`
//   background: ${props => props.bgColor};
//   flex-basis: 100%;
// `;

class Particle extends React.Component {
  state = {
    styles: [
      { width: 0, height: 20 },
      { width: 24, height: 60 },
      { width: 50, height: 90 },
      { width: 60, height: 60 },
      { width: 80, height: 180 },
      { width: 100, height: 100 }
    ]
  };
  render() {
    const { children, startAnimation } = this.props;
    return (
      <StaggeredMotion
        defaultStyles={[
          { width: 0, height: 20 },
          { width: 24, height: 60 },
          { width: 50, height: 90 },
          { width: 60, height: 60 },
          { width: 80, height: 180 },
          { width: 100, height: 100 }
        ]}
        styles={prevStyles => {
          return [
            {
              width: spring(startAnimation ? 0 : 100),
              height: spring(startAnimation ? 0 : 100)
            },
            {
              width: spring(prevStyles[0].width),
              height: spring(prevStyles[0].height)
            },
            {
              width: spring(prevStyles[1].width),
              height: spring(prevStyles[1].height)
            },
            {
              width: spring(prevStyles[2].width),
              height: spring(prevStyles[2].height)
            },
            {
              width: spring(prevStyles[3].width),
              height: spring(prevStyles[3].height)
            },
            {
              width: spring(prevStyles[4].width),
              height: spring(prevStyles[4].height)
            }
          ];
        }}
      >
        {styles => (
          <Wrapper>
            {/* <Box bgColor={colors[0]} width={styles[0].width} />
            <Box bgColor={colors[1]} width={styles[1].width} />
            <Box bgColor={colors[2]} width={styles[2].width} />
            <Box bgColor={colors[3]} width={styles[3].width} />
            <Box bgColor={colors[4]} width={styles[4].width} />

            <Box bgColor={colors[5]} width={styles[5].width} /> */}

            <SVG width={styles[0].width} height={styles[0].height} />

            <SVG width={styles[1].width} height={styles[1].height} />
            <SVG width={styles[2].width} height={styles[2].height} />
            <SVG width={styles[3].width} height={styles[3].height} />
            <SVG width={styles[4].width} height={styles[4].height} />
            {/* <ContentWrapper bgColor={colors[6]}>
              {styles[3].width < 25 && children}
            </ContentWrapper> */}
          </Wrapper>
        )}
      </StaggeredMotion>
    );
  }
}

export default Particle;
