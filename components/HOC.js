import React from "react";

export default function HOC(Component, properties) {
  return props => {
    return (
      <div>
        Hola
        <Component />
      </div>
    );
  };
}
