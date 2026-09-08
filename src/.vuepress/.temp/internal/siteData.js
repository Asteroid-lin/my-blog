export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"Leo's Tech Lab\",\"description\":\"个人技术成长档案与供应链架构实践\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"Leo's Tech Lab\",\"description\":\"个人技术成长档案与供应链架构实践\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateSiteData?.(siteData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateSiteData?.(m.siteData)
  })
}
