import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import BackendPaths from "../../backend-paths";
import ArticleItem from "../articles/ArticleItem";
import LoadingMessage from "../UI/LoadingMessage";
import PageSection from "../UI/PageSection";
import SearchBar from "../UI/SearchBar";

const Search = (props) => {
  const seachTermParam = useParams().searchTerm;
  const [searchPhrase, setSearchPhrase] = useState(seachTermParam);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading]= useState(true);

  useEffect(()=>{
    getPosts();
  },[seachTermParam]);

  const getPosts = async()=>{
    setIsLoading(true);
    try{
    const res=await fetch(`${BackendPaths.GET_POSTS_BY_SEARCH}${searchPhrase}`);
    const output = await res.json();
    setArticles(output);
    }catch(err){
        console.log(err.message);
    }
    setIsLoading(false);
  }
  
  const searchInputHandler = (searchTerm) => {
    setSearchPhrase(searchTerm);
  };

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
            <h2 className="mb-4">Search Results</h2>
            <SearchBar
              searchTerm={searchPhrase}
              className={"mb-2"}
              onSearchPhraseChange={searchInputHandler}
            />
            {isLoading && <LoadingMessage />}
            {!isLoading && articles.length===0 && <p className="mt-5"><h5>No Results Found :(</h5>Try searching something else.</p>}
          </div>
        </div>
        <div className="row">
            {articles.length>0 && articles.map(mapArticles)}
        </div>
      </PageSection>
  );
};

export default Search;
