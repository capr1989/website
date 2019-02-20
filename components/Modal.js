import * as React from "react";

import { Portal } from "./Portal";

export default class Modal extends React.Component {
  state = { opened: false };

  modalStateHandler = () => {
    const modalState = !this.state.opened;
    this.setState({ opened: modalState });
    console.log(this.state.opened);
  };

  render() {
    return (
      <React.Fragment>
        <button type="button" onClick={this.modalStateHandler}>
          Open Modal
        </button>
        {this.state.opened && (
          <Portal selector="#modal">
            <div className="overlay">
              <button type="button" onClick={this.modalStateHandler}>
                Close Modal
              </button>

              <style jsx global>{`
                body {
                  overflow: hidden;
                }
              `}</style>
              <style jsx>{`
                .overlay {
                  position: fixed;
                  background-color: rgba(0, 0, 0, 0.7);
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                }
              `}</style>
            </div>
          </Portal>
        )}
      </React.Fragment>
    );
  }
}
