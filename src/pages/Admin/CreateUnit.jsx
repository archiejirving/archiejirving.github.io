import React, { useState, useEffect } from 'react'
import TitleSection from '../../components/admin/TitleSection'
import ImageBucket from '../../components/ImageBucket'

function CreateUnit() {
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

export default CreateUnit
