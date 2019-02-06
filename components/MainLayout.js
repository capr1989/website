import React from "react";

import { Global } from "@emotion/core";
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
  return class App extends React.Component {
    static displayName = "MainLayout(Component)";

    static async getInitialProps(ctx) {
      const props = {};
      if (Component.getInitialProps) {
        Object.assign(props, await Component.getInitialProps(ctx));
      }
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await props;
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error("Error while running `getDataFromTree`", error);
        }
      }

      return { ...props };
    }
    render() {
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
          <Component {...this.props} />
        </React.Fragment>
      );
    }
  };
};
