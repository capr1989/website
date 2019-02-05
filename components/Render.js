import React from "react";

export default function Render(props) {
  const { children, render } = props;

  return <div>{children()}</div>;
}
