import { hasGlobalComponent } from "D:/Product/my/front/my-blog/node_modules/@vuepress/helper/dist/client/index.js";
import Badge from "D:/Product/my/front/my-blog/node_modules/vuepress-plugin-components/dist/client/components/Badge.js";

import "D:/Product/my/front/my-blog/node_modules/@vuepress/helper/dist/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
