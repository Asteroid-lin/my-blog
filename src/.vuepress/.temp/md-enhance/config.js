import CodeDemo from "D:/Project/my/Front/my-blog/node_modules/vuepress-plugin-md-enhance/dist/client/components/CodeDemo.js";
import MdDemo from "D:/Project/my/Front/my-blog/node_modules/vuepress-plugin-md-enhance/dist/client/components/MdDemo.js";
import Playground from "D:/Project/my/Front/my-blog/node_modules/vuepress-plugin-md-enhance/dist/client/components/Playground.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Playground", Playground);
  },
};
