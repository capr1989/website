import Link from "next/link";
import AnimationLinks from "./AnimationLinks";
import { withRouter } from "next/router";
import { mainLinks } from "../js/globals";
import { activeClass } from "../js/utils";

export default withRouter(
  class Header extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <ul className="row header">
          <Link href="/" as={`${process.env.BACKEND_URL}/`}>
            <a>
              <li
                className={
                  this.props.router.pathname === "/"
                    ? "cust__active col nav-link"
                    : "col nav-link"
                }
              >
                Go to Home{" "}
              </li>
            </a>
          </Link>
          {mainLinks.map((page, key) => {
            const nameLength = page.name.split("").length;
            const linkName =
              page.name.split("")[0].toUpperCase() +
              page.name
                .split("")
                .splice(1, nameLength)
                .join("");
            return (
              <Link
                key={key}
                href={"/" + page.name}
                as={`${process.env.BACKEND_URL}/${page.name}`}
              >
                <a>
                  <li
                    className={
                      this.props.router.pathname === "/" + page.name
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
          <AnimationLinks />;
        </ul>
      );
    }
  }
);
