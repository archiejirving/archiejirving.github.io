import { useState, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import map1 from '../../assets/images/map1.png'
import Nav from '../../layouts/Nav'
import Footer from '../../layouts/Footer'
import helmet from '../../assets/images/helmet.png'

import BlogPost from '../../components/feed/BlogPost'
import DatabaseWidget from '../../components/feed/DatabaseWidget'
import MainArticle from '../../components/feed/MainArticle'

function App() {
    return (
        <>
            <Nav />
            <div className="w-[100%] min-h-screen flex justify-center p-[30px]">
                
                <div className='w-[60%] flex gap-10 flex-col overflow-hidden'>
                    <div className='flex justify-center border-b-8 border-b-gray-100 rounded pb-2'>
                        <div className="float-left">
                            <a href="/">
                                <div className='h-[60px] flex'>
                                    <p className="text-[55px] viaappia font-bold">A</p>
                                    <p className="text-[50px] viaappia font-bold ">RMADA</p>
                                </div>
                                <div className='flex'>
                                    <img src={helmet} className='w-[75px]'></img>
                                    <p className="text-[50px] viaappia font-bold">R</p>
                                    <p className="text-[40px] viaappia font-bold">OTTA</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <DatabaseWidget></DatabaseWidget>
                        <MainArticle></MainArticle>
                    </div>
                    <div className='flex justify-between border-t border-b p-2 gap-2'>
                        <div className='bg-gray-100 flex-grow p-3 flex-col flex justify-between'>
                            <div className='flex border-b border-white'>
                                <p>Conflict Tracker</p>
                                <span class="relative flex h-1 w-1">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-100"></span>
                                </span>       
                                <p className='ml-3 text-[20px] '>Israel-Gaza Conflict</p>
                            </div>
                            <div className='flex bg-[url("/img/hero-pattern.svg")] z-50'>
                                <div className='rounded p-1 bg-white opacity-90'>
                                    <p>Israel</p>
                                    <table>
                                        <tr>
                                            <td className='border-r border-l-4 border-l-[green] pr-2 text-[40px]'>132</td>
                                            <td>Total</td>
                                        </tr>
                                        <tr>
                                            <td className='border-r border-l-4 border-l-[red] pr-2'>23</td>
                                            <td>Destroyed</td>
                                        </tr>
                                        <tr>
                                            <td className='border-r border-l-4 border-l-[yellow] pr-2'>100</td>
                                            <td>Captured</td>
                                        </tr>
                                        <tr>
                                            <td className='border-r border-l-4 border-l-[blue] pr-2'>9</td>
                                            <td>Damaged</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className='rounded p-1 bg-white opacity-90'>
                                    <p>Hamas</p>

                                    <table>
                                        <tr>
                                            <td className='border-r border-l-4 border-l-[green] pr-2 text-[40px]'>51</td>
                                            <td>Total</td>
                                        </tr>
                                        <tr>
                                            <td className='border-r border-l-4 border-l-[red] pr-2'>30</td>
                                            <td>Destroyed</td>
                                        </tr>
                                        <tr>
                                            <td className='border-r border-l-4 border-l-[yellow] pr-2'>16</td>
                                            <td>Captured</td>
                                        </tr>
                                        <tr>
                                            <td className='border-r border-l-4 border-l-[blue] pr-2'>2</td>
                                            <td>Damaged</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div className='flex gap-1 border-t-4 border-white pt-2'>
                                <div className='w-[200px] border-white border p-2'>
                                    <img src='https://sites.breakingmedia.com/uploads/sites/3/2023/01/230111_polish_leopard_tank_7199854-scaled-e1673459459992.jpg'></img>
                                    <p className='text-[12px] font-bold font-serif'>Polish Military Aid To Ukraine</p>
                                </div>
                                <div className='w-[200px] border-white border p-2'>
                                    <img src='https://www.reuters.com/resizer/zG-qFxx-Wn8aCpRmEfHiGDYEbGI=/1257x658/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TPAJ3VZUGVM5LC5CDUERE63TOE.jpg'></img>
                                    <p className='text-[12px] font-bold font-serif'>Lancet ALert: Succesful Lancet strikes in the Russo Ukraine War</p>
                                </div>
                                <div className='w-[200px] border-white border p-2'>
                                    <img src='https://www.aljazeera.com/wp-content/uploads/2023/04/33DB66J-highres-3.jpg?resize=770%2C513&quality=80'></img>
                                    <p className='text-[12px] font-bold font-serif'>Title</p>
                                </div>
                                <div className='w-[200px] border-white border p-2'>
                                    <img src='https://www.aljazeera.com/wp-content/uploads/2023/04/33DB66J-highres-3.jpg?resize=770%2C513&quality=80'></img>
                                    <p className='text-[12px] font-bold font-serif'>Title</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex-col'>
                            <p>Recently Added</p>
                            <BlogPost></BlogPost>
                            <div className='border-t'></div>
                            <BlogPost></BlogPost>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App
