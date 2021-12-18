import React, {useState, useEffect} from "react";
import PageSection from "../UI/PageSection";
import { useParams } from "react-router-dom";
import ArticleItem from "../articles/ArticleItem";
import LoadingMessage from "../UI/LoadingMessage";

const Tags = () => {
 const tagName = useParams().tagName;
 const [articles, setArticles] = useState([]);
 const [isLoading, setIsLoading]= useState(true);


 useEffect(()=>{
    getPosts();
 },[tagName]);
 
 const getPosts=async()=>{
    setIsLoading(true);
    try{
        const res=await fetch(`https://stephen-blog-backend.herokuapp.com/posts/tag/${tagName}`)
        const output= await res.json();
        setArticles(output);
    }catch(err){
        console.log(err)
    }
    setIsLoading(false);
}

const mapArticles = (article) =>{
    return  (
    <div key={article._id} className="col-md-4">
        <ArticleItem  article={article} />
    </div>)
}


  return (
    <PageSection>
      <div className="row justify-content-center mb-5 pb-2">
        <div className="col-md-7 heading-section text-center">
            <h2 className="mb-4">Articles In {tagName}</h2>
            {isLoading && <LoadingMessage />}
            {!isLoading && articles.length===0 && <p className="mt-5"><h5>There Are Currently No Articles Using That Tag :(</h5></p>}
        </div>
      </div>
      <div className="row">
          {articles.map(mapArticles)}
      </div>
    </PageSection>
  );
};

export default Tags;
