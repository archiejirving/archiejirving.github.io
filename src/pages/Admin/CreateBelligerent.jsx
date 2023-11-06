import React, { useState, useEffect, useReducer } from 'react'
import TitleSection from '../../components/admin/TitleSection'
import ImageBucket from '../../components/ImageBucket'

function CreateBelligerent() {

    return (
        <div>
            <div className='flex'>
                <div className='bg-white text-black rounded-[10px] flex flex-col p-2 w-fit'>
                    <TitleSection title="Add Equipment Type"></TitleSection>
                    <p>Reference Images:</p>
                    <ImageBucket></ImageBucket>
                </div>
            </div>
        </div>
    )
}

export default CreateBelligerent
