import MainLayout from "../components/MainLayout";
import Link from "next/link";

import React, { Component } from "react";
import fetch from "node-fetch";

export default class Index extends Component {
  static async getInitialProps() {
    let data;
    try {
      const response = await fetch(
        // "https://rdugjtk5y9.execute-api.us-east-2.amazonaws.com/dev/"
        "https://jsonplaceholder.typicode.com/posts"
      );
      data = await response.json();
    } catch (error) {
      console.log(error);
    }
    return { data: await data.splice(0, 10) };

    // return { data: data };
  }
  render() {
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
    // console.log(data);
    return (
      <MainLayout>
        {/* <h1>{data.body}</h1> */}
        <ul>{renderData()}</ul>
        {process.env.BACKEND_URL}
      </MainLayout>
    );
  }
  // console.log(this.props);
  // return <p>{this.props.data.body}</p>;
}