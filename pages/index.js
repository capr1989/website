import MainLayout from "../components/MainLayout";
import Link from "next/link";
import { Motion, spring, TransitionMotion } from "react-motion";

import React, { Component } from "react";
import fetch from "node-fetch";
import Render from "../components/Render";

export default MainLayout(
  class Index extends Component {
    componentWillMount() {}
    // static async getInitialProps() {
    //   let data;
    //   try {
    //     const response = await fetch(
    // "https://rdugjtk5y9.execute-api.us-east-2.amazonaws.com/dev/"
    //       "https://jsonplaceholder.typicode.com/posts"
    //     );
    //     data = await response.json();
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   return { data: await data.splice(0, 10) };

    //   // return { data: data };
    // }

    render() {
      // const { data } = this.props;
      // const renderData = () => {
      //   return data.map(d => {
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

      return (
        <React.Fragment>
          {/* <h1>{data.body}</h1> */}
          {/* <ul>{renderData()}</ul>
        {process.env.BACKEND_URL} */}
          {/* <Picker people={people} /> */}
          <p>main</p>
          <Render>
            {() => {
              return <h1>heloo</h1>;
            }}
          </Render>
        </React.Fragment>
      );
    }
    // console.log(this.props);
    // return <p>{this.props.data.body}</p>;
  }
);
