import React, { useContext } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';
import Pagination from '../components/Pagination';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname] )

  return (
    <div className='flex flex-col justify-center items-center'>
      <Header/>
    
      {
        loading ?
        (<div>
            <p> Loading</p>
        </div>) :
        blog ?
        (<div  className="flex flex-col gap-y-10  mb-[50px]  my-4 w-11/12 max-w-[670px] h-full py-8   justify-center items-start">
              <div className='mt-[50px] flex gap-5 '>
        <button
         className="border-2 border-gray-300 py-1 px-4 rounded-md"
        onClick={() => navigation(-1)}
        >
            Back
        </button>

        <button
         className="border-2 border-gray-300 py-1 px-4 rounded-md"
        onClick={() => navigation("/Blogs-web-using-contextAPI")}
        >
            Home
        </button>
      </div>
            <BlogDetails post={blog} />
            <h2 className='text-2xl font-bold mt-5 mb-5 underline '> Related Blogs </h2>
            {
                relatedblogs.map( (post) => (
                    <div key = {post.id}>
                        <BlogDetails post={post} />
                    </div>
                ) )
            }

        <div  className='flex gap-5'>
        <button
         className="border-2 border-gray-300 py-1 px-4 rounded-md"
        onClick={() => navigation(-1)}
        >
            Back
        </button>

        <button
         className="border-2 border-gray-300 py-1 px-4 rounded-md"
        onClick={() => navigation("/Blogs-web-using-contextAPI")}
        >
            Home
        </button>
      </div>

        </div>) :
        (<div>
            <p>No Blog Found</p>
        </div>)
       
      }
     


    </div>
  )
}

export default BlogPage
