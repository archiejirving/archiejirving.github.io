import { useState, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from '../../layouts/Nav'
import Footer from '../../layouts/Footer'

import ResultsTable from '../../components/ResultsTable'
import QuerySection from '../../components/QueryForm'

import formDataReducer from '../../reducers/formDataReducer'

function Database() {
    const [formData, formDataDispatch] = useReducer(formDataReducer, {})
    return (
        <>
            <Nav />
            <div className="w-[100%] min-h-screen flex justify-center p-[30px]">
                <div className='w-[70%] flex gap-10 flex-col'>
                    <div>
                        <a className='hover:cursor-pointer' href='/'>
                            <p className='text-[20px] text-gray-400 hover:underline hover:text-black'>🢀 Home</p>
                        </a>
                        <p className='font-bold text-[40px]'>Search Database</p>
                    </div>
                    <QuerySection formDataDispatch={formDataDispatch}></QuerySection>
                    {formData ? <p>{JSON.stringify(formData)}</p> : null}
                    <ResultsTable></ResultsTable>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Database
