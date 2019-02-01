import React from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import { Global, css } from "@emotion/core";
import { hydrate } from "emotion";

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

export default props => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          * {
            color: blue !important;
            font-size: 50px !important;
            text-align: center !important;
          }
        `}
      />

      <Header />
      {props.children}
    </React.Fragment>
  );
};
