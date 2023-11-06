function BlogPost(props) {
    return (
        <div className="max-w-[40vh] border-t border-b mt-2 mb-2">
            <div className="border-b">
                <a href={props.url}>
                <h1 className="text-[30px] hover:underline">{props.title}</h1>
                </a>
            </div>
            <div className="p-1">
                <a href={props.url}>
                    <img src={props.image} className="w-[100%]"></img>
                </a>
            </div>
            <div className="font-bold text-gray-800 text-[10px]">
                <a href={props.url}>
                    <p>7th Sep 23 · {props.author}</p>
                </a>
            </div>
            <div className="truncate">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

BlogPost.defaultProps = {
    url: "https://www.google.com",
    title: "Sudan Crisis",
    author: "Archie Irving",
    tags: ["China", "Tianamen Square", "Protest"],
    image: "https://www.aljazeera.com/wp-content/uploads/2023/04/33DB66J-highres-3.jpg?resize=770%2C513&quality=80"
}

export default BlogPost
