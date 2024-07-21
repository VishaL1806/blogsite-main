import React, { useEffect, useState } from 'react'
import BlogCard from '../components/blogCard'
import { getTopNews } from '../api/apiCalls'

const Home = () => {

    const [articles, setArticles] = useState()
  
    useEffect(() => {
      getTopNews().then((val)=>{
       setArticles(val.articles);
      });
    }, [])
  return (
    <div className='mt-5'>   {articles && articles.map((value,index)=>(
        <div key={index}>
          <BlogCard 
          publishedAt={value.publishedAt}
          title={value.title}
          description={value.description}
          source={value.source}
          author={value.author}
          content={value.content}
          url={value.url}
          urlImage={value.urlToImage}
         /></div>
      ))}</div>
  )
}

export default Home