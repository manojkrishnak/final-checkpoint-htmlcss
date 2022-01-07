/*
{
    id: number
    title: string,
    tags: [],
    content: string,
    feedback: {
        hearts: number,
        unicorns: number,
        bookmarks: number,
        comments: number // at this moment
    },
    readTime: number,
    createdAt: date
}


*/

var blogData = [
    {
        id: 1,
        title: "testing the application with dynamic blog loading",
        tags: ["blog", "html", "css", "js"],
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium cumque quo ipsum vitae consequatur asperiores autem consectetur, natus excepturi, est nulla tempora omnis exercitationem numquam ad illo porro, tenetur veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet aliquam mollitia, architecto ducimus error rem maiores optio cumque sapiente placeat distinctio aliquid exercitationem ipsam voluptas magnam veritatis consequatur reiciendis.",
        feedback: {
            hearts: 2,
            unicorns: 4,
            bookmarks: 7,
            comments: 3
        },
        readTime: 2,
        createdAt: "2022-01-06"
    },
    {
        id: 2,
        title: "testing the application with dynamic blog loading - 2",
        tags: ["html", "css", "js"],
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium cumque quo ipsum vitae consequatur asperiores autem consectetur, natus excepturi, est nulla tempora omnis exercitationem numquam ad illo porro, tenetur veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet aliquam mollitia, architecto ducimus error rem maiores optio cumque sapiente placeat distinctio aliquid exercitationem ipsam voluptas magnam veritatis consequatur reiciendis.",
        feedback: {
            hearts: 4,
            unicorns: 8,
            bookmarks: 14,
            comments: 6
        },
        readTime: 1,
        createdAt: "2022-01-07"
    },
    {
        id: 3,
        title: "testing the application- 3",
        tags: ["html", "css"],
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium cumque quo ipsum vitae consequatur asperiores autem consectetur, natus excepturi, est nulla tempora omnis exercitationem numquam ad illo porro, tenetur veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet aliquam mollitia, architecto ducimus error rem maiores optio cumque sapiente placeat distinctio aliquid exercitationem ipsam voluptas magnam veritatis consequatur reiciendis.",
        feedback: {
            hearts: 0,
            unicorns: 0,
            bookmarks: 0,
            comments: 0
        },
        readTime: 1,
        createdAt: "2022-01-07"
    },
    {
        id: 4,
        title: "testing the application- 4",
        tags: ["html", "js"],
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium cumque quo ipsum vitae consequatur asperiores autem consectetur, natus excepturi, est nulla tempora omnis exercitationem numquam ad illo porro, tenetur veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet aliquam mollitia, architecto ducimus error rem maiores optio cumque sapiente placeat distinctio aliquid exercitationem ipsam voluptas magnam veritatis consequatur reiciendis.",
        feedback: {
            hearts: 5,
            unicorns: 0,
            bookmarks: 0,
            comments: 0
        },
        readTime: 2,
        createdAt: "2022-01-08"
    },
    {
        id: 1,
        title: "testing the application with dynamic blog loading - 5",
        tags: ["blog", "html", "css", "js"],
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium cumque quo ipsum vitae consequatur asperiores autem consectetur, natus excepturi, est nulla tempora omnis exercitationem numquam ad illo porro, tenetur veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet aliquam mollitia, architecto ducimus error rem maiores optio cumque sapiente placeat distinctio aliquid exercitationem ipsam voluptas magnam veritatis consequatur reiciendis.",
        feedback: {
            hearts: 12,
            unicorns: 24,
            bookmarks: 37,
            comments: 43
        },
        readTime: 2,
        createdAt: "2022-01-06"
    },
    {
        id: 2,
        title: "testing the application with dynamic blog loading - 6",
        tags: ["html", "css", "js"],
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium cumque quo ipsum vitae consequatur asperiores autem consectetur, natus excepturi, est nulla tempora omnis exercitationem numquam ad illo porro, tenetur veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet aliquam mollitia, architecto ducimus error rem maiores optio cumque sapiente placeat distinctio aliquid exercitationem ipsam voluptas magnam veritatis consequatur reiciendis.",
        feedback: {
            hearts: 14,
            unicorns: 28,
            bookmarks: 54,
            comments: 40
        },
        readTime: 1,
        createdAt: "2022-01-07"
    },
    {
        id: 3,
        title: "testing the application- 7",
        tags: ["html", "css"],
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium cumque quo ipsum vitae consequatur asperiores autem consectetur, natus excepturi, est nulla tempora omnis exercitationem numquam ad illo porro, tenetur veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet aliquam mollitia, architecto ducimus error rem maiores optio cumque sapiente placeat distinctio aliquid exercitationem ipsam voluptas magnam veritatis consequatur reiciendis.",
        feedback: {
            hearts: 0,
            unicorns: 0,
            bookmarks: 0,
            comments: 0
        },
        readTime: 1,
        createdAt: "2022-01-07"
    },
    {
        id: 4,
        title: "testing the application- 8",
        tags: ["html", "js"],
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium cumque quo ipsum vitae consequatur asperiores autem consectetur, natus excepturi, est nulla tempora omnis exercitationem numquam ad illo porro, tenetur veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet aliquam mollitia, architecto ducimus error rem maiores optio cumque sapiente placeat distinctio aliquid exercitationem ipsam voluptas magnam veritatis consequatur reiciendis.",
        feedback: {
            hearts: 2,
            unicorns: 0,
            bookmarks: 0,
            comments: 0
        },
        readTime: 2,
        createdAt: "2022-01-08"
    }
]