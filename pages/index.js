import Link from "next/link";
import "../css/main.css";
export default () => (
  <div>
    Hello World.{" "}
    <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
      <a>About</a>
    </Link>
  </div>
);
