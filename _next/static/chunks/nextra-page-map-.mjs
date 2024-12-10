export const pageMap = [{
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "topics",
  route: "/topics",
  children: [{
    name: "01-introduction",
    route: "/topics/01-introduction",
    children: [{
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