export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-0370558c","v-184f4da6","v-1d59d0e6","v-49312a44","v-45c77906","v-425dc7c8","v-3ef4168a","v-3b8a654c","v-3820b40e","v-649fe232","v-c97ab98e","v-104da61f","v-12027ebe","v-7c27fd02","v-1a221d9e","v-5abebbfa","v-476ae7b4"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-0370558c"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

