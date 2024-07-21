import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({publishedAt,source,title,description,url,urlImage,author,content}) => {
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">{source?.name} || {author}</strong>
          <h3 className="mb-0">{title}</h3>
          <div className="mb-1 mt-1 text-body-secondary">{new Date(publishedAt).toLocaleDateString()}</div>
          <p className="card-text mb-auto">{description}</p>
          <Link to={"/details"} className="icon-link gap-1 icon-link-hover stretched-link" onClick={()=>localStorage.setItem("item",JSON.stringify({publishedAt,source,title,description,url,urlImage,author,content}))}>
            Continue reading
          </Link>
        </div>
        <div className="col-auto d-none  d-lg-block">
         <img src={urlImage} alt="" className='object-fit-cover border rounded' width={250} height={250} />
        </div>
      </div>
  )
}

export default BlogCard