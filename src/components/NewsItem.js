import React from 'react'

const NewsItem = (props) => {
    const { title, description, urlImg, newsUrl, author, source } = props;
    return (
        <>
            <div className="card mt-4 p-0 shadow-sm">
                <a href={newsUrl}><img src={urlImg} style={{ width:"100%", height: 250 }} className="card-img-top" alt="" /></a>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}... <span><a href={newsUrl} className="text-primary">Read More</a></span></p>
                    <p><span className="badge text-bg-danger">{source}</span></p>
                    <p className="card-text"><small className="text-body-secondary"><b>By - </b> {author ? author : "Unknown"}</small></p>
                </div>
            </div>
        </>       
    )
}

export default NewsItem;