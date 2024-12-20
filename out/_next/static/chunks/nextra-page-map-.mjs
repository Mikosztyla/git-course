import meta from "../../../pages/_meta.js";
import topics_meta from "../../../pages/topics/_meta.js";
import topics_01_introduction_meta from "../../../pages/topics/01-introduction/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "topics",
  route: "/topics",
  children: [{
    data: topics_meta
  }, {
    name: "01-introduction",
    route: "/topics/01-introduction",
    children: [{
      data: topics_01_introduction_meta
    }, {
      name: "01-history",
      route: "/topics/01-introduction/01-history",
      frontMatter: {
        "sidebarTitle": "01 History"
      }
    }, {
      name: "02-control-version",
      route: "/topics/01-introduction/02-control-version",
      frontMatter: {
        "sidebarTitle": "02 Control Version"
      }
    }, {
      name: "index",
      route: "/topics/01-introduction",
      frontMatter: {
        "sidebarTitle": "Index"
      }
    }]
  }, {
    name: "02-basics",
    route: "/topics/02-basics",
    children: [{
      name: "index",
      route: "/topics/02-basics",
      frontMatter: {
        "sidebarTitle": "Index"
      }
    }]
  }, {
    name: "03-gitignore",
    route: "/topics/03-gitignore",
    children: [{
      name: "index",
      route: "/topics/03-gitignore",
      frontMatter: {
        "sidebarTitle": "Index"
      }
    }]
  }, {
    name: "99-commands",
    route: "/topics/99-commands",
    children: [{
      name: "index",
      route: "/topics/99-commands",
      frontMatter: {
        "sidebarTitle": "Index"
      }
    }]
  }]
}];