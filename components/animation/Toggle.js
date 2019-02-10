import MainLayout from "../MainLayout";
import { hydrate } from "emotion";
import styled from "@emotion/styled";
import { Motion, spring } from "react-motion";

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

const Container = styled.div`
  height: min-content;
`;

const Row = styled.div`
  height: 100%;
`;

const Col = styled.div`
  background-color: hotpink;
  height: 15%;
  padding: 10px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
`;

const Inner = styled.div`
  background-color: purple;
  border-top: 1px solid hotpink;
  height: ${props => {
    props.height;
  }};
`;

export default class Toggle extends React.Component {
  state = {
    isOpen: false,
    height: 0
  };
  componentWillMount() {}
  componentDidMount() {}
  componentWillUpdate() {}
  componentDidUpdate() {
    const element = document.querySelector("div > p");
    if (this.state.isOpen) {
      element.style.display = "block";
    }
  }
  componentWillUnmount() {}

  render() {
    this.onClick = () => {
      const element = document.querySelector("div > p");
      const openHeight = spring(300, {
        precision: 20,
        damping: 60,
        stiffness: 280
      });
      const closeHeight = spring(0, {
        precision: 20,
        damping: 60,
        stiffness: 280
      });
      const open = !this.state.isOpen;
      if (open) {
        return this.setState((state, props) => {
          return { height: openHeight, isOpen: !state.isOpen };
        });
      } else {
        return this.setState((state, props) => {
          return { height: closeHeight, isOpen: !state.isOpen };
        });
      }
    };
    return (
      <Container className={"container"}>
        <Motion
          defaultStyle={{ height: 0 }}
          style={{
            height: this.state.height
          }}
          onRest={() => {
            const element = document.querySelector("div > p");
            if (!this.state.isOpen) {
              element.style.display = "none";
            }
          }}
        >
          {val => (
            <Row className="row">
              <Col className="col-12">
                <button className="btn alert-danger" onClick={this.onClick}>
                  Toggle
                </button>
              </Col>

              <Inner
                className="col-12"
                style={{
                  height: val.height
                }}
              >
                <p className="lorem">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  quos cupiditate repudiandae distinctio omnis accusamus
                  laudantium quo ipsa veniam officiis exercitationem iusto
                  dolorum, laborum deleniti saepe cum soluta dolorem
                  necessitatibus. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Ducimus sit ab nobis voluptatum iusto rem
                  facere alias quod, quos quae? Fugiat aut adipisci a debitis
                  tempora. Excepturi qui odio sit. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Porro quos cupiditate
                  repudiandae distinctio omnis accusamus laudantium quo ipsa
                  veniam officiis exercitationem iusto dolorum, laborum deleniti
                  saepe cum soluta dolorem necessitatibus. Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Ducimus sit ab nobis
                  voluptatum iusto rem facere alias quod, quos quae? Fugiat aut
                  adipisci a debitis tempora. Excepturi qui odio sit.
                </p>
              </Inner>
              <div className="data-collapse col-12 p-4">
                <p className="stats">Height: {val.height + "px"}</p>
                <p className="stats">Opened: {this.state.isOpen.toString()}</p>
              </div>
            </Row>
          )}
        </Motion>
      </Container>
    );
  }
}
