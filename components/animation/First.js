import React from "react";
import { hydrate } from "emotion";
import styled from "@emotion/styled";
import { Motion, spring } from "react-motion";

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: rgb(240, 240, 232);
  position: relative;
  margin: 5px 3px 10px;
  width: 450px;
  height: 50px;
`;

const Block = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: rgb(130, 181, 198);
`;
export default class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleMouseDown = () => {
    this.setState({ open: !this.state.open });
  };

  handleTouchStart = e => {
    e.preventDefault();
    this.handleMouseDown();
  };
  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}
        >
          Toggle
        </button>
        <Motion
          style={{
            x: spring(this.state.open ? 400 : 0, {
              damping: 0,
              stiffness: 2
            })
          }}
        >
          {x => {
            return (
              <Wrapper>
                <Block
                  style={{
                    WebkitTransform: `translate3d(${x.x}px, 0, 0)`,
                    transform: `translate3d(${x.x}px, 0, 0)`
                  }}
                />
              </Wrapper>
            );
          }}
        </Motion>
      </div>
    );
  }
}
