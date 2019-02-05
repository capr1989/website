import MainLayout from "../components/MainLayout";
import { withRouter } from "next/router";
import fetch from "node-fetch";
import App from "next/app";

import React, { Component } from "react";

class Post extends Component {
  static async getInitialProps(props) {
    // props keys ='err', 'req', 'res', 'pathname', 'query', 'asPath' = server
    // props keys = 'pathname', 'query', 'asPath' = client
    const { query } = props;
    const postId = query.id;
    let parsedPost;
    try {
      const postData = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + postId
      );
      parsedPost = await postData.json();
    } catch (error) {}
    return { post: parsedPost };
  }
  render() {
    const { post } = this.props;
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default withRouter(MainLayout(Post));
