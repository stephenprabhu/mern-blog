import React from "react";
import moment from "moment";
import BackendPaths from "../../backend-paths";

const ArticleItem = (props) => {
  return (
    <div className="blog-entry ">
      <a
        href={`/article-${props.article.slug}`}
        className="img img-2"
        style={{
          backgroundImage: `url(${BackendPaths.GET_POST_IMAGE}${props.article.image})`,
        }}
      ></a>
      <div className="text text-2 pt-2 mt-3">
        <span className="category mb-3 d-block">
          <a href={`/tag-${props.article.tags[0]}`}>{props.article.tags[0]}</a>
        </span>
        <h3 className="mb-4">
          <a href={`/article-${props.article.slug}`}>{props.article.title}</a>
        </h3>
        <p className="mb-4">{props.article.snippet}</p>
        <div className="author mb-4 d-flex align-items-center">
          <div className="ml-3 info">
            <h3>
              <span>{moment(props.article.date).fromNow()}</span>
            </h3>
          </div>
        </div>
        <div className="meta-wrap align-items-center">
          <div className="half">
            <p>
              <a href={`/article-${props.article.slug}`} className="btn py-2">
                Continue Reading <i className="icon-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
