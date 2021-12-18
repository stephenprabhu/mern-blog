import React from 'react';

const ArticleContent = (props) => {
    return (
        <>
            <h2 className="mb-3 font-weight-bold">{props.title}</h2>
            <div dangerouslySetInnerHTML={{__html:props.content}}></div>
            <div className="tag-widget post-tag-container mb-5 mt-5">
	              <div className="tagcloud">
                     <a href={`/tag-${props.tags}`} className="tag-cloud-link">{props.tags}</a>
	              </div>
            </div>
        </>
    )
}

export default ArticleContent
