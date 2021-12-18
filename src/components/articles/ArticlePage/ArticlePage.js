import React,{useEffect,useState} from 'react';
import SearchBar from '../../UI/SearchBar';
import ArticleContent from './ArticleContent';
import NewsLetter from './NewsLetter';
import PopularArticles from './PopularArticles/PopularArticles';
import { useParams } from "react-router";
import BackendPaths from '../../../backend-paths';
import PageSection from '../../UI/PageSection';


const ArticlePage = () => {
    const articleSlug=useParams().slug;
    const [article,setArticle]= useState({});
    useEffect(()=>{
        getPost();
    },[articleSlug]);

    const getPost=async()=>{
        try{
            const res=await fetch(`${BackendPaths.GET_POST}${articleSlug}`,{headers:{'Access-Control-Allow-Origin':'*'}});
            const output=await res.json()
            setArticle(output);
        }catch(err){
            console.log(err)
        }
    }

    return (
<PageSection>
        <div className="row">
            <div className="col-lg-8">
                <ArticleContent  title={article.title} 
                content={article.body}
                tags={article.tags}
             />
            </div>
            <div className="col-lg-4 sidebar">
                <div className="sidebar-box">
                    <SearchBar />
	            </div>
                {/*<div className="sidebar-box">
	            <h3 className="sidebar-heading">Categories</h3>
	              <ul className="categories">
	                <li><a href="#">Fashion <span>(6)</span></a></li>
	                <li><a href="#">Technology <span>(8)</span></a></li>
	                <li><a href="#">Travel <span>(2)</span></a></li>
	                <li><a href="#">Food <span>(2)</span></a></li>
	                <li><a href="#">Photography <span>(7)</span></a></li>
	              </ul>
    </div>*/}
                <PopularArticles />
                <NewsLetter />
            </div>
        </div>
        </PageSection>
    )
}

export default ArticlePage
