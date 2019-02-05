import Link from "next/link";
import AnimationLinks from "./AnimationLinks";
import { withRouter } from "next/router";
import { mainLinks } from "../js/globals";
import { activeClass } from "../js/utils";

export default withRouter(props => {
  if (props.router.query.name === "first") {
    console.log(props, "first");
  }
  return (
    <ul className="row header">
      <Link href="/" as={`${process.env.BACKEND_URL}/`}>
        <a>
          <li
            className={activeClass("/", props.router.pathname, "col nav-link")}
          >
            Go to Home{" "}
          </li>
        </a>
      </Link>
      {mainLinks.map((p, index) => {
        const nameLength = p.name.split("").length;
        const linkName =
          p.name.split("")[0].toUpperCase() +
          p.name
            .split("")
            .splice(1, nameLength)
            .join("");

        return (
          <Link
            key={index}
            href={"/" + p.name}
            as={`${process.env.BACKEND_URL}/` + p.name}
          >
            <a>
              <li
                className={activeClass(
                  props.router.pathname.split("/")[1],
                  p.name,
                  "col nav-link"
                )}
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
});
