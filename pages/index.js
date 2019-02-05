import MainLayout from "../components/MainLayout";
import Link from "next/link";
import { Motion, spring, TransitionMotion } from "react-motion";
import hoistNonReactStatics from "hoist-non-react-statics";

import React, { Component } from "react";
import fetch from "node-fetch";
import Render from "../components/Render";

class Index extends React.Component {
  static async getInitialProps() {
    let data;
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      data = await response.json();
    } catch (error) {
      console.log(error);
    }
    return { data: await data.splice(0, 10) };
  }

  render() {
    // const renderData = async () => {
    //   console.log(await this.props, "holallalalsdd");
    //   return await this.props.map(d => {
    //     return (
    //       <Link
    //         key={d.id}
    //         href={`/post?id=${d.id}`}
    //         as={`${process.env.BACKEND_URL}/post/${d.id}`}
    //       >
    //         <a>
    //           <li key={d.id}>{d.title}</li>
    //         </a>
    //       </Link>
    //     );
    //   });
    // };
    // console.log(data);
    const { data } = this.props;
    const renderData = () => {
      return data.map(d => {
        return (
          <Link
            key={d.id}
            href={`/post?id=${d.id}`}
            as={`${process.env.BACKEND_URL}/post/${d.id}`}
          >
            <a>
              <li key={d.id}>{d.title}</li>
            </a>
          </Link>
        );
      });
    };
    return (
      <React.Fragment>
        {/* <h1>{data.body}</h1> */}
        {/* <ul>{renderData()}</ul>
        {process.env.BACKEND_URL} */}
        {/* <Picker people={people} /> */}
        <p>main</p>
        <Render>
          {() => {
            return renderData();
          }}
        </Render>
      </React.Fragment>
    );
  }
}
export default MainLayout(Index);
