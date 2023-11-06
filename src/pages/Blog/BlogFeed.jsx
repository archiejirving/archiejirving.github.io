import loadBlogFeed from "./loadblogfeed"
import { useState } from "react"
function PostWidget(props) {
    const [path, setPath] = useState("blog/article/" + props.title)
    return (
        <div className="w-[60%] border">
            <a href={path}>
            <p className="text-center font-mono font-bold hover:text-red-600">Israel At War: Tracking Equipment losses in the 2023 Israel-Gaza War</p>
            <img className="w-[97%] m-auto border-t border-black pt-1" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLp8gOnBSNIYlzn6c2TkGWOCW70A61ADhjou00jfCq6aYkN8sBUakEo7UNa44qOLMHc7-N3o-HlySCOG7FkPtNa1qcFRXKTtOlDaWTwd5Mpuelc18oghNyf7Yr_L7C2VW_IDmFCK5voE38lNgr_PPXlFmcGZa1wKzlpmxhvzHBSj_Pc2TcdRusOm0sBUE/w752-h423/title.png"></img>
            </a>
        </div>
    )
}
function BlogFeed() {
    const [posts, setPosts] = useState(loadBlogFeed())
    return (
        <div className="flex-col flex items-center border-l border-r border-gray-200 gap-5">
            <h1>Blog Feed</h1>
            <a href="/blog/article">Click</a>
            {posts.map((post) => (
                <PostWidget title={post} />
            ))}
        </div>
    )
}

export default BlogFeed