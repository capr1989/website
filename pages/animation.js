import React from "react";
import { withRouter } from "next/router";
import AnimationLinks from "../components/AnimationLinks";
import MainLayout from "../components/MainLayout";
export default MainLayout(
  withRouter(
    class Animation extends React.Component {
      render() {
        return <AnimationLinks />;
      }
    }
  )
);
