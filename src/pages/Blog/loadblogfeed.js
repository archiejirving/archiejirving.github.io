import data from '../../data/meta.json' assert { type: "json" }
function loadBlogFeed() {
    var output = []
    output = data.posts
    console.log(output)
    return output
}

export default loadBlogFeed