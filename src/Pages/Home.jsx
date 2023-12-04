import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='flex flex-col justify-center mt-[50px] items-center'>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
