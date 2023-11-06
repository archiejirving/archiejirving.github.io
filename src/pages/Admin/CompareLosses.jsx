import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from '../../layouts/Nav/'
import LossCard from '../../components/compare/LossCard';

function Compare() {
    return (
        <>
            <Nav />
            <div className="w-[100%] flex justify-center p-[30px]">
                <div className='w-[80%] flex justify-center gap-10'>
                    <div className='flex flex-col'>
                        <div className='w-[600px] flex'>
                            <LossCard></LossCard>
                            <LossCard></LossCard>
                        </div>
                        <div>
                            <p>ASSESSMENT</p>
                            <div>
                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"></input>
                                <p>Select Differences</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Compare;