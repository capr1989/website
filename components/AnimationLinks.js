import React from "react";
import Link from "next/link";
import { animationLinks } from "../js/globals";
import { withRouter } from "next/router";
import { activeClass, getLinkName } from "../js/utils";

export default withRouter(
  class AnimationLinks extends React.Component {
    render() {
      return (
        <ul className={"col px-0"}>
          {animationLinks.map((p, key) => {
            const pathArr = this.props.router.pathname.split("/");
            const query = pathArr[pathArr.length - 1];
            const nameLength = p.name.split("").length;
            const linkName =
              p.name.split("")[0].toUpperCase() +
              p.name
                .split("")
                .splice(1, nameLength)
                .join("");
            return (
              <Link
                key={key}
                href={`/animation/${p.name}`}
                as={`${process.env.BACKEND_URL}/animation/${p.name}`}
              >
                <a>
                  <li
                    className={
                      query === p.name
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
