import React from "react";
import MainLayout from "../../components/MainLayout";
import AnimationLinks from "../../components/AnimationLinks";
import { hydrate, css } from "emotion";
import styled from "@emotion/styled";

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: rgb(240, 240, 232);
  position: relative;
  margin: 5px 3px 10px;
  width: 450px;
  height: 50px;
`;

const Block = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: rgb(130, 181, 198);
`;
export default MainLayout(function first(props) {
  return (
    <div>
      <Wrapper>
        <Block />
      </Wrapper>
    </div>
  );
});
