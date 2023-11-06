import data from '../../data/meta.json' assert { type: "json" }

async function loadBlogData(postId) {
    // check if postID in data

    if (data.posts.includes(postId)) {
        var path = "./datadir/blogposts/" + postId + ".json"
        // import data from the path
        var mine = await import(`./datadir/blogposts/${postId}.json`)
        return mine.data
    }
    else {
        return null
    }
}

export default loadBlogData