import MainLayout from "../components/MainLayout";
import { withRouter } from "next/router";

import React, { Component } from "react";

class Post extends Component {
  render() {
    console.log(this.props);
    return (
      <MainLayout>
        <h1>{this.props.router.query.id}</h1>
      </MainLayout>
    );
  }
}

export default withRouter(Post);
