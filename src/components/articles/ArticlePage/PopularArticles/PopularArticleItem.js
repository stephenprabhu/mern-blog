import moment from 'moment';
import React from 'react';
import BackendPaths from '../../../../backend-paths';

const PopularArticleItem = (props) => {
    return (
        <div class="block-21 mb-4 d-flex">
          <a href={`/article-${props.article.slug}`} class="blog-img mr-4" style={{backgroundImage: `url(${BackendPaths.GET_POST_IMAGE}${props.article.image})`}}></a>
          <div class="text">
            <h3 class="heading"><a href={`/article-${props.article.slug}`}>{props.article.title}</a></h3>
            <div class="meta">
              <div><a href={`/article-${props.article.slug}`}><span class="icon-calendar"></span> {moment(props.article.date).fromNow()}</a></div>
            </div>
          </div>
        </div>
    )
}

export default PopularArticleItem
