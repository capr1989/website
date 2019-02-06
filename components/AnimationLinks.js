import React from "react";
import Link from "next/link";
import { animationLinks } from "../js/globals";
import { withRouter } from "next/router";
import { upperCaseLink } from "../js/utils";

export default withRouter(
  class AnimationLinks extends React.Component {
    componentDidMount() {
      this.mountPathArr = window.location.pathname.split("/");
      this.mountPathLength = this.mountPathArr.length;
      this.mountQuery = this.mountPathArr[this.mountPathLength - 1];
    }

    render() {
      console.log(this.mountQuery, "querymount");

      return (
        <ul className={"col px-0"}>
          {animationLinks.map((p, key) => {
            const linkName = upperCaseLink(p.name);
            const pathArr = this.props.router.asPath.split("/");
            const pathLength = this.props.router.asPath.split("/").length;
            const query = pathArr[pathLength - 1];
            console.log(query, "query");

            console.log(
              query === p.name || this.mountQuery === p.name
                ? "cust__active col nav-link"
                : "col nav-link"
            );
            console.log(query === p.name || this.mountQuery === p.name);
            return (
              <Link
                key={key}
                href={`/animation?name=${p.name}`}
                as={`${process.env.BACKEND_URL}/animation/${p.name}`}
              >
                <a>
                  <li
                    className={
                      query === p.name || this.mountQuery === p.name
                        ? "cust__active col nav-link"
                        : "col nav-link"
                    }
                  >
                    {linkName}
                  </li>
                </a>
              </Link>
            );
          })}
        </ul>
      );
    }
  }
);
