import React from "react";
import Link from "next/link";
import { animationLinks } from "../js/globals";
import { withRouter } from "next/router";
import { upperCaseLink } from "../js/utils";
import ActiveLink from "../components/ActiveLink";

export default withRouter(
  class AnimationLinks extends React.Component {
    componentDidMount() {
      // this.mountPathArr = window.location.pathname.split("/");
      // this.mountPathLength = this.mountPathArr.length;
      // this.mountQuery = this.mountPathArr[this.mountPathLength - 1];
      const node = document.querySelectorAll(".cust__active.col.nav-link");
      const classes = node[0].className;
      //   .split(" ")
      //   .splice(1, 2)
      //   .join(" ");
      // node[0].className = classes;
      // console.log(node[0].classList);
    }

    render() {
      return (
        <ul className={"col px-0"}>
          {animationLinks.map((p, key) => {
            const linkName = upperCaseLink(p.name);
            const pathArr = this.props.router.asPath.split("/");
            const pathLength = this.props.router.asPath.split("/").length;
            const query = pathArr[pathLength - 1];
            const classCondition = () => {
              if (this.props.router.query.name === p.name) {
                return "cust__active col nav-link";
              }
              return "col nav-link";
            };
            return (
              <Link
                key={key}
                href={`/animation?name=${p.name}`}
                as={`${process.env.BACKEND_URL}/animation/${p.name}`}
              >
                <a className={classCondition()}>
                  <li>{linkName}</li>
                </a>
              </Link>
            );
          })}
        </ul>
      );
    }
  }
);
