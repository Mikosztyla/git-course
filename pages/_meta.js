export default {

    index: {
        title: 'Strona główna'
    },
    "---": {
        type: "separator"
    },
    topics: {
        title: "Rozdziały",
        type: 'menu',
        items: {
            "01-introduction": {
                type: "page",
                title: "1. Introduction",
                href: "/topics/01-introduction"
            },
            "02-basics": {
                type: "page",
                title: "2. Podstawy",
                href: "/topics/02-basics"
            },
            "03-gitignore": {
                type: "page",
                title: "3. gitignore",
                href: "/topics/03-gitignore"
            }
        }
    },
    commands: {
        type: 'page',
        title: "Przydatne komendy"
    }
}