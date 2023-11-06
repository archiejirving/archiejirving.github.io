import data from '../../data/meta.json' assert { type: "json" }

async function loadListData(listID) {
    // check if postID in data

    if (data.lists.includes(listID)) {
        var mine = await import(`./datadir/lists/${listID}.json`)
        console.log("13131414")
        console.log(mine)
        return mine.list
    }
    else {
        return null
    }
}

export default loadListData