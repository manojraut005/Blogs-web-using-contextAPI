import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className='flex flex-col justify-center items-center'>
      <Header/>
      <div className='mt-[100px] flex flex-col  my-4 w-11/12 max-w-[670px]  gap-10 items-start '>
       <div className='flex gap-5'>
       <button
         className="border-2 border-gray-300 py-1 px-4 rounded-md  "
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
        <h2 className='text-2xl font-bold'> 
            Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
