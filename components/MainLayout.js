import React from "react";

import { Global, css } from "@emotion/core";
import { hydrate } from "emotion";
import Header from "../components/Header";

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";

export default Component => {
  return props => {
    return (
      <React.Fragment>
        <Global
        // styles={css`
        //   * {
        //     color: blue !important;
        //     font-size: 50px !important;
        //     text-align: center !important;
        //   }
        // `}
        />

        <Header />
        <Component />
      </React.Fragment>
    );
  };
};
