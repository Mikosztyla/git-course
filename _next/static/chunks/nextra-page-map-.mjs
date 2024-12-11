import meta from "../../../pages/_meta.js";
import topics_meta from "../../../pages/topics/_meta.js";
import topics_01_introduction_meta from "../../../pages/topics/01-introduction/_meta.js";
import topics_02_basics_meta from "../../../pages/topics/02-basics/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "commands",
  route: "/commands",
  frontMatter: {
    "sidebarTitle": "Commands"
  }
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
      data: topics_02_basics_meta
    }, {
      name: "01-first-repo",
      route: "/topics/02-basics/01-first-repo",
      frontMatter: {
        "sidebarTitle": "01 First Repo"
      }
    }, {
      name: "02-first-commit",
      route: "/topics/02-basics/02-first-commit",
      frontMatter: {
        "sidebarTitle": "02 First Commit"
      }
    }, {
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
  }]
}];