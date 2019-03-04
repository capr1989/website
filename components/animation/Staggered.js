import React from "react";
import { StaggeredMotion, spring } from "react-motion";
import { hydrate } from "emotion";
import styled from "@emotion/styled";

const Ball = styled.div`
  border-radius: 99px;
  background-color: hotpink;
  width: 50px;
  height: 50px;
  -webkit-box-shadow: 10px 10px 36px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 10px 10px 36px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 10px 10px 36px 1px rgba(0, 0, 0, 0.2);
  position: absolute;
  border: 1px solid honeydew;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  border-top: 1px solid black;
`;
// const Col = styled.div``;

// const Row = styled.div``;
// if (typeof window !== "undefined") {
//   hydrate(window.__NEXT_DATA__.ids);
// }

// export default class Staggered extends React.Component {
//   state = { x: 250, y: 300 };
//   getStyles = prevStyles => {
//     // `prevStyles` is the interpolated value of the last tick
//     const endValue = prevStyles.map((_, i) => {
//       return i === 0
//         ? this.state
//         : {
//             x: spring(prevStyles[i - 1].x),
//             y: spring(prevStyles[i - 1].y)
//           };
//     });
//     return endValue;
//   };
//   render() {
//     return (
//       <StaggeredMotion
//         defaultStyles={[
//           { x: 0, y: 0 },
//           { x: 0, y: 0 },
//           { x: 0, y: 0 },
//           { x: 0, y: 0 },
//           { x: 0, y: 0 }
//         ]}
//         styles={this.getStyles}
//       >
//         {balls => (
//           <Container className="container-fluid">
//             <Row className="row justify-content-around mod-row align-items-center">
//               <Col className="col-6 text-center d-flex align-items-center justify-content-center">
//                 {balls.map(({ x, y }, i) => (
//                   <Ball
//                     key={i}
//                     style={{
//                       WebkitTransform: `translate3d(${x - 25}px, ${y -
//                         25}px, 0)`,
//                       transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
//                       zIndex: balls.length - i
//                     }}
//                   />
//                 ))}
//               </Col>
//             </Row>
//           </Container>
//         )}
//         )}
//       </StaggeredMotion>
//     );
//   }
// }

// <Container className="container-fluid">
{
  /* <Row className="row justify-content-around mod-row align-items-center"> */
}
{
  /* <Col className="col-6 text-center d-flex align-items-center justify-content-center"> */
}

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}
export default class Staggered extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 250, y: 300 };
  }

  isMounted = false;

  componentDidMount() {
    this.isMounted = true;
    if (this.isMounted) {
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("touchmove", this.handleTouchMove);
    }
  }

  componentWillUnmount() {
    this.isMounted = false;
    if (!this.isMounted) {
      window.removeEventListener("mousemove", this.handleMouseMove);
      window.removeEventListener("touchmove", this.handleTouchMove);
    }
  }

  handleMouseMove = ({ pageX: x, pageY: y }) => {
    this.setState({ x, y });
  };

  handleTouchMove = ({ touches }) => {
    this.handleMouseMove(touches[0]);
  };

  getStyles = prevStyles => {
    // `prevStyles` is the interpolated value of the last tick
    const endValue = prevStyles.map((_, i) => {
      return i === 0
        ? this.state
        : {
            x: spring(prevStyles[i - 1].x, { stiffness: 120, damping: 14 }),
            y: spring(prevStyles[i - 1].y, { stiffness: 120, damping: 14 })
          };
    });
    return endValue;
  };

  render() {
    return (
      <StaggeredMotion
        defaultStyles={[
          { x: 0, y: 0 },
          { x: 0, y: 0 },
          { x: 0, y: 0 },
          { x: 0, y: 0 },
          { x: 0, y: 0 },
          { x: 0, y: 0 }
        ]}
        styles={this.getStyles}
      >
        {balls => (
          <Container className="container-fluid">
            {balls.map(({ x, y }, i) => (
              <Ball
                key={i}
                style={{
                  WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                  transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                  zIndex: balls.length - i
                }}
              />
            ))}
          </Container>
        )}
      </StaggeredMotion>
    );
  }
}
