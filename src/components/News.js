import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let response = await data.json();
        setArticles(response.articles);
        setTotalResults(response.totalResults);
        setLoading(false)
    }

    useEffect(() => {
        updateNews()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMoreData = async () => {
        // Fetch news data
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let response = await data.json();
        setArticles(articles.concat(response.articles))
        setTotalResults(response.totalResults)
        setLoading(false)
    };
    return (
        <>
            <h3 className='text-center pt-4' style={{ marginTop: '80px' }}>Daily News - Top {capitalizeFirstLetter(props.category)} Headlines</h3>

            {loading && <Loading />}
            <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Loading />}  >
                <div className="container px-4">
                    <div className="row p-2">
                        {articles.map((curElem, index) => {
                            return <div className='col-md-4' key={index}>
                                <NewsItem
                                    title={curElem.title ? curElem.title.slice(0, 50) : ""}
                                    source={curElem.source.name}
                                    description={curElem.description ? curElem.description.slice(0, 75) : ""}
                                    urlImg={curElem.urlToImage ? curElem.urlToImage : "https://img.etimg.com/thumb/msid-100890436,width-1070,height-580,imgsize-24476,overlay-etmarkets/photo.jpg"}
                                    author={curElem.author}
                                    newsUrl={curElem.url}
                                />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News;