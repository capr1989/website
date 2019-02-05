import React from "react";

export default function HOC(Component, properties) {
  return props => {
    console.log(properties, "hoc, props");
    return (
      <div>
        Hola
        <Component />
      </div>
    );
  };
}
