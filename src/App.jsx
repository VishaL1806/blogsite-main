// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogCard from './components/blogCard';
import { getTopNews } from './api/apiCalls';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  const [articles, setArticles] = useState()
  
  useEffect(() => {
    getTopNews().then((val)=>{
     setArticles(val.articles);
     console.log(val.articles);
    });
  }, [])
   
  return (<>
  <div className="container">
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/details' element={<Details />}></Route>
    </Routes>
   
</div></>
  );
}

export default App;
