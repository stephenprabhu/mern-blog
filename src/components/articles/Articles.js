import React,{useContext, useState, useEffect} from 'react';
import ArticleItem from './ArticleItem';
import NavContext from '../../store/nav-context';
import BackendPaths from '../../backend-paths';
import LoadingMessage from '../UI/LoadingMessage';
import PageSection from '../UI/PageSection';


const Articles = () => {
    const context = useContext(NavContext);
    context.setActivePage(0);
    const [posts, setPosts]=useState([]);
    useEffect(()=>{
        getPosts();
    },[]);

    const getPosts =  async() =>{
        try{
            const res=await fetch(BackendPaths.GET_POSTS);
            if(res.ok){
                const output=await res.json()
                setPosts(output);
            }
        }catch(err){
            console.log(err.message);
        }
    }
    return (
        <PageSection>
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 heading-section text-center">
            <h2 className="mb-4">Articles</h2>
            {posts.length==0 && <LoadingMessage />}
          </div>
        </div>
            <div className="row">
                {posts.map((post)=>( <div className="col-md-4"><ArticleItem article={post} /></div>))}
            </div>
        </PageSection>
    )
}

export default Articles;
