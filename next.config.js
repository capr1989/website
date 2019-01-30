// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const withCSS = require("@zeit/next-css");
const fetch = require("node-fetch");

const debug = process.env.NODE_ENV !== "production";

module.exports = withCSS({
  async exportPathMap() {
    // we fetch our list of posts, this allow us to dynamically generate the exported pages
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const postList = await response.json();

    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = postList.reduce(
      (pages, post) => {
        console.log(post, "cambio post");
        return Object.assign({}, pages, {
          [`/post/${post.id}`]: {
            page: "/post",
            query: { id: post.id }
          }
        });
      },

      {}
    );

    // combine the map of post pages with the home
    return Object.assign({}, pages, {
      "/": { page: "/" },
      "/about": { page: "/about" }
    });
  },

  assetPrefix: !debug ? "/website/" : "",
  webpack(config, options) {
    return config;
  }
});

// module.exports = {
//   exportPathMap: function() {
//     return {
//       "/": { page: "/" },
//       "/about": { page: "/about" }
//     };
//   },
//   assetPrefix: !debug ? "/website/" : ""
// };
