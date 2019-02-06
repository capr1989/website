import React from "react";
import { withRouter } from "next/router";
import AnimationLinks from "../components/AnimationLinks";
import MainLayout from "../components/MainLayout";
import { upperCaseLink } from "../js/utils";
export default withRouter(
  MainLayout(
    class Animation extends React.Component {
      componentDidMount() {
        this.mountPathArr = window.location.pathname.split("/");
        this.mountPathLength = this.mountPathArr.length;
        this.mountQuery = this.mountPathArr[this.mountPathLength - 1];
      }
      static async getInitialProps(ctx) {
        return { data: await ctx.query };
      }
      render() {
        let Animation;
        if (this.props.data.name) {
          const linkName = upperCaseLink(this.props.data.name);
          Animation = require("../components/animation/" + linkName).default;
        } else {
          Animation = () => {
            return <p>Animation Page</p>;
          };
        }

        return (
          <div>
            <AnimationLinks activa={this.props.data.name} />
            <Animation />
          </div>
        );
      }
    }
  )
);
