// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const withCSS = require("@zeit/next-css");
const fetch = require("node-fetch");
const path = require("path");
const fs = require("fs");

const debug = process.env.NODE_ENV !== "production";
const directory = path.join(__dirname, "pages", "animation");

const files = fs.readdirSync(directory);

module.exports = withCSS({
  async exportPathMap() {
    // we fetch our list of posts, this allow us to dynamically generate the exported pages
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let postList = await response.json();

    postList = postList.splice(0, 10);
    // tranform the list of posts into a map of pages with the pathname `/post/:id`

    const animationList = files.map(f => {
      const fileName = f.split(".")[0];
      return { name: fileName };
    });
    const pages = postList.reduce(
      (pages, post) => {
        return Object.assign({}, pages, {
          [`/post/${post.id}`]: {
            page: "/post",
            query: { id: post.id }
          }
        });
      },

      {}
    );

    const animationPages = animationList.reduce(
      (list, animation) => {
        return Object.assign({}, list, {
          [`/animation/${animation.name}`]: {
            page: "/animation",
            query: { name: animation.name }
          }
        });
      },

      {}
    );

    const fullMappedRoutes = Object.assign({}, pages, animationPages, {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/animation": { page: "/animation" },
      "/story": { page: "/story" },
      "/contact": { page: "/contact" }
    });
    // combine the map of post pages with the home
    return fullMappedRoutes;
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
