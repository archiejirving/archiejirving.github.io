import { useState, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from '../../layouts/Nav'
import Footer from '../../layouts/Footer'

import Article from './Article'
import BlogFeed from './BlogFeed'

function Blog() {

    return (
        <>
            <Nav />
                <div className='min-h-screen w-[100%] flex justify-center'>
                    <div className='flex justify-between w-[60%]'>
                        <div className='w-[85%] mx-auto'>
                            <Routes>
                                <Route path='/' element={<BlogFeed />} />
                                <Route path='/article/*' element={<Article />} />
                            </Routes>
                        </div>

                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Blog
