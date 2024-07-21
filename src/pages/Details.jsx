import React from 'react'
import { useNavigate } from 'react-router-dom'

const Details = () => {
    let article  = JSON.parse(localStorage.getItem('item'))
    const navigate = useNavigate();
  return (

    <div className='container d-flex flex-column mt-2 position-relative'>
        <button className='mt-2 btn btn-secondary float-end position-absolute' style={{top:'10PX' ,right:"-50px"}} onClick={()=>navigate("/")}>Back</button>
       <h2 > {article.title}

       </h2>
       <hr />
       <img src={article.urlImage} alt="" className='' />
       <hr />
       <h4 className='d-flex justify-content-between'>
        <span>{article.author } </span> <span>{new Date(article.publishedAt).toLocaleDateString()} </span>
       </h4>
       <p style={{fontSize:'18px'}}>{article.description}</p>
       <p style={{fontSize:'18px'}}>{article.content}</p>
       <p style={{fontSize:'18px'}}><a href={article.url} target='_blank'>more at </a> </p>
    </div>
  )
}

export default Details