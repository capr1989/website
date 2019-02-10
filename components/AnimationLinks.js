import React from "react";
import Link from "next/link";
import { animationLinks } from "../js/globals";
import { withRouter } from "next/router";
import { upperCaseLink } from "../js/utils";
import { hydrate } from "emotion";
import styled from "@emotion/styled";

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
  alert("hola");
}

export default withRouter(
  class AnimationLinks extends React.Component {
    render() {
      return (
        <ul className={"col px-0"}>
          {animationLinks.map((p, key) => {
            const linkName = upperCaseLink(p.name);

            const Li = styled.li`
              font-weight: ${({ name, query }) => {
                return name === query ? "bolder" : "300";
              }};
            `;
            return (
              <Link
                key={key}
                href={`/animation?name=${p.name}`}
                as={`${process.env.BACKEND_URL}/animation/${p.name}`}
              >
                <a>
                  <Li name={p.name} query={this.props.router.query.name}>
                    {linkName}
                  </Li>
                </a>
              </Link>
            );
          })}
        </ul>
      );
    }
  }
);
