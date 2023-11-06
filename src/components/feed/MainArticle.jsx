function MainArticle(props) {
    return (
        <div className="flex  border overflow-hidden p-2 flex-grow">
            <div className="flex-col flex w-[40%] justify-between">
                <div></div>
                <div className="flex-col flex justify-center w-[100%] text-center">
                    <a href="/blog/article"><p className="text-[30px] hover:text-red-800">Israel At War</p></a>
                    <p className="font-bold text-[10px]">Archie Irving and Elmustek</p>
                    <p className="text-[10px]">Tracking Equipment losses in the 2023 Israe-Gaza War</p>
                </div>
                <div className="flex justify-between pr-2">
                    <p className="font-serif text-[10px] text-gray-500">See the data</p>
                    <p className="font-serif text-[10px] text-gray-500">Read</p>
                </div>
            </div>
            <div className="w-[60%]">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLp8gOnBSNIYlzn6c2TkGWOCW70A61ADhjou00jfCq6aYkN8sBUakEo7UNa44qOLMHc7-N3o-HlySCOG7FkPtNa1qcFRXKTtOlDaWTwd5Mpuelc18oghNyf7Yr_L7C2VW_IDmFCK5voE38lNgr_PPXlFmcGZa1wKzlpmxhvzHBSj_Pc2TcdRusOm0sBUE/w752-h423/title.png"></img>
            </div>
        </div>
    )
}

export default MainArticle