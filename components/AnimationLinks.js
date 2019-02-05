import React from "react";
import Link from "next/link";
import crypto from "crypto";
import { animationLinks } from "../js/globals";
import { withRouter } from "next/router";
import { activeClass, getLinkName } from "../js/utils";

export default withRouter(
  class AnimationLinks extends React.Component {
    render() {
      return (
        <ul className={"col px-0"}>
          {animationLinks.map(p => {
            const nameLength = p.name.split("").length;
            const linkName =
              p.name.split("")[0].toUpperCase() +
              p.name
                .split("")
                .splice(1, nameLength)
                .join("");
            return (
              <li
                key={crypto.randomBytes(20).toString("hex")}
                className={activeClass(
                  this.props.router.pathname.split("/")[2],
                  p.name,
                  "nav-link"
                )}
              >
                <Link
                  href={`/animation/${p.name}`}
                  as={`${process.env.BACKEND_URL}/animation/${p.name}`}
                >
                  <a>{linkName}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
  }
);
