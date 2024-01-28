import './App.css';
import Posts from './component/Posts';
import Pagination from './component/Pagination';
import React,{useEffect} from 'react';
import{useState} from 'react'
import axios from 'axios';

function App() {
  const [posts,setPosts]= useState([]);
  const [currentPage,setCurrentPage]= useState(1);
  const postsPerPage=10;
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    const fetchPosts=async()=>{
     setLoading(true)
     const res= await axios.get('https://jsonplaceholder.typicode.com/posts');
     console.log("res", res);
     setPosts(res.data);
     setLoading(false);
    }
    fetchPosts();
  },[])//dependencies
  //get posts of the active page=3
const indexOfLastPost=currentPage*postsPerPage;//30
const indexOfFirstPost=indexOfLastPost-postsPerPage;//20
const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);//20-29
//change active page
const paginate = (pageNumber)=>setCurrentPage(pageNumber);
  return (
    <div className="container">
      <h1>My Blog</h1>
      <Posts currentPosts={currentPosts} loading={loading}/>
      <Pagination
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate} 
      currentPage={currentPage}
      />
    </div>
  );
}

export default App;
