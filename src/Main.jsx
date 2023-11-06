import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from './pages/Admin'
import App from './pages/App'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Admin/Login';
import Blog from './pages/Blog';
import DashBoard from './pages/Admin/Dashboard';
import Database from './pages/Database';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<App />} />
        <Route path="/home/*" element={<App />} />
        <Route path="/admin/*" element={<Admin />  } />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path='/blog/*' element={<Blog />} />
        <Route path='/database' element={<Database />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
//<div>
//  
//<div  x-show="open"     
//        x-transition:enter-start="opacity-0 scale-90" 
//        x-transition:enter="transition duration-200 transform ease"
//        x-transition:leave="transition duration-200 transform ease"
//        x-transition:leave-end="opacity-0 scale-90"
//        class="max-w-[400px] float-right ml-auto fixed bg-white inset-x-5 p-5 bottom-10 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
//    <div class="w-full font-serif">This website uses cookies </div>
//    <div class="flex gap-4 items-center flex-shrink-0">
//
//      <button class="text-red-500 focus:outline-none hover:underline font-serif">Learn more</button>
//      <button class="bg-black px-5 py-2 text-white rounded-md hover:bg-gray-700 focus:outline-none font-serif">Accept </button>
//    </div>
//</div>
//
//</div>