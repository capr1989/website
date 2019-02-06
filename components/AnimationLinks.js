import React from "react";
import Link from "next/link";
import { animationLinks } from "../js/globals";
import { withRouter } from "next/router";
import { upperCaseLink } from "../js/utils";

export default withRouter(
  class AnimationLinks extends React.Component {
    render() {
      return (
        <ul className={"col px-0"}>
          {animationLinks.map((p, key) => {
            const linkName = upperCaseLink(p.name);
            return (
              <Link
                key={key}
                href={`/animation?name=${p.name}`}
                as={`${process.env.BACKEND_URL}/animation/${p.name}`}
              >
                <a>
                  <li
                    className={
                      this.props.router.query.name === p.name ||
                      this.props.children === p.name
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
