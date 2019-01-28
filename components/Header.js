import Link from "next/link";

export default () => {
  return (
    <div>
      <Link href="/" as={`${process.env.BACKEND_URL}/`}>
        <a>Go to Home</a>
      </Link>
      <Link href="/page1" as={`${process.env.BACKEND_URL}/about`}>
        <a>Go to page</a>
      </Link>
      ;
    </div>
  );
};
