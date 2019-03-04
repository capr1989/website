import * as React from "react";
import { spring, Motion } from "react-motion";
import { Portal } from "./Portal";
import { hydrate } from "emotion";
import styled from "@emotion/styled";
if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}
const Container = styled.div`
  display: ${props => {
    if (props.margin === -300) {
      props.style.display = "none";
    } else if (props.margin === 0) {
      props.style.display = "none";

      props.style.display = "block";
    }
  }};
`;
const Col = styled.div`
  background-color: hotpink;
  height: 15%;
  padding: 10px;
`;

const Row = styled.div`
  margin-top: ${props => {
    if (props.style.marginTop !== -300 || props.style.marginTop !== 0) {
      console.log(props.style.marginTop);
    } // console.log(props.style.marginTop);
    props.style.marginTop;
  }};
  opacity: ${props => {
    props.style.opacity;
  }};
`;
export default class Modal extends React.Component {
  state = {
    opened: false,
    marginTop: {
      damping: 8,
      stiffness: 100,
      precision: 5,
      val: -300
    },
    opacity: 0
  };

  modalStateHandler = () => {
    const modalState = !this.state.opened;

    const openState = spring(0, {
      damping: 8,
      stiffness: 100,
      precision: 5
    });
    const openStateOpacity = spring(1, {
      damping: 100,
      stiffness: 200,
      precision: 0
    });
    const closedStateOpacity = spring(0, {
      damping: 100,
      stiffness: 100,
      precision: 5
    });
    const closedState = spring(-300, {
      damping: 8,
      stiffness: 100,
      precision: 5
    });

    if (modalState) {
      this.setState((state, props) => {
        return {
          opened: modalState,
          marginTop: openState,
          opacity: openStateOpacity
        };
      });
    } else {
      this.setState((state, props) => {
        return {
          opened: modalState,
          marginTop: closedState,
          opacity: closedStateOpacity
        };
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn-light p-1"
          onClick={this.modalStateHandler}
        >
          Open Modal
        </button>
        {!this.state.opened ? (
          <Motion
            defaultStyle={{ marginTop: -300, opacity: 0 }}
            style={{
              marginTop: this.state.marginTop,
              opacity: this.state.opacity
            }}
          >
            {val => {
              return (
                <Portal selector="#modal">
                  <Container
                    className="overlay container-fluid"
                    style={{
                      display: val.display,
                      opacity: val.opacity
                    }}
                    margin={val.marginTop}
                  >
                    <Row
                      className="row justify-content-around mod-row align-items-center"
                      style={{ marginTop: val.marginTop, opacity: val.opacity }}
                    >
                      <Col className="col-6 text-center d-flex align-items-center justify-content-center">
                        <button
                          type="button"
                          className="btn-light p-1"
                          onClick={() => {
                            this.modalStateHandler();
                          }}
                        >
                          Close Modal
                        </button>
                      </Col>
                    </Row>
                  </Container>
                </Portal>
              );
            }}
          </Motion>
        ) : (
          <Motion
            defaultStyle={{ marginTop: 0, opacity: 1 }}
            style={{
              marginTop: this.state.marginTop,
              opacity: this.state.opacity
            }}
          >
            {val => {
              return (
                <Portal selector="#modal">
                  <Container
                    className="overlay container-fluid"
                    style={{
                      display: val.display
                    }}
                  >
                    <Row
                      className="row justify-content-around mod-row align-items-center"
                      style={{ marginTop: val.marginTop, opacity: val.opacity }}
                    >
                      <Col className="col-6 text-center d-flex align-items-center justify-content-center">
                        <button
                          type="button"
                          className="btn-light p-1"
                          onClick={this.modalStateHandler}
                        >
                          Close Modal
                        </button>
                      </Col>
                    </Row>
                  </Container>
                </Portal>
              );
            }}
          </Motion>
        )}
      </React.Fragment>
    );
  }
}
