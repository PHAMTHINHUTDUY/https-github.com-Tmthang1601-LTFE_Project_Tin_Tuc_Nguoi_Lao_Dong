import React, {useEffect, useState} from 'react';
import NewsItem from "./NewsItem";

function NewsBoard() {

    const [articles, setArticles] = useState([]);

    useEffect(() =>{
        let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY'
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles()));


    },[])

    return (
        <div>
            <h2 className={"text-center"}>
                <span className={""}>
                Báo tin tức người lao động
                </span>
            </h2>

        </div>
    );
}

export default NewsBoard;