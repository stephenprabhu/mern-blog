import React,{useState, useEffect} from 'react';
import PopularArticleItem from './PopularArticleItem';
import PostImage from '../../../../assets/images/image_1.jpg';
import BackendPaths from '../../../../backend-paths';

const PopularArticles = (props) => {
  const [articles, setArticles]=useState([]);
  let count=0;
  let articleTag;
  if(props.tags==null){
      articleTag='Movies'
    }else{
      articleTag=props.tags[0]
    }

    useEffect(() => {
      getRelatedPosts();
  }, []);
  const getRelatedPosts=async()=>{
    try{
        const res=await fetch(`${BackendPaths.GET_POSTS_BY_TAG}${articleTag}`)
        const output= await res.json();
        setArticles(output);
    }catch(err){
        console.log(err)
    }
}
const mapArticles=(article)=>{
  count+=1;
  if(count<4){
      return <PopularArticleItem key={article._id} article={article} />
  }
  return;
}
    return (
        <div className="sidebar-box">
        <h3 className="sidebar-heading">Popular Articles</h3>
        {articles.map(mapArticles)}
      </div>
    )
}

export default PopularArticles
