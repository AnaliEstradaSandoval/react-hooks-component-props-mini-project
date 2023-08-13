import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const postList = posts.forEach(post => <Article />)
    return (
        <main>
            {postList}
        </main>
    )
}

export default ArticleList;