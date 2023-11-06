import { useState, useEffect } from 'react'
import tank from '../../assets/svg/vehicles/tank.svg'
import owl from '../../assets/images/owl.png'
import loadBlogData from './loadblogdata'
import { key } from 'localforage'

import Title from '../../components/article/Title'
import Paragraph from '../../components/article/Paragraph'
import MainImage from '../../components/article/MainImage'

import Lister from './Lister'



function imagePopup() {
    return (
        <div>
            <img src={owl}></img>
        </div>
    )
}

function Article() {
    const [displayImage, setDisplayImage] = useState(false)
    const [mydata, setMydata] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)
    const [component, setComponent] = useState([])
    const [rowNumber, setRowNumber] = useState(3)

    useEffect(() => {
        if (!dataLoaded) {
            const path = window.location.pathname.split('/')
            loadBlogData(path[path.length - 1]).then((data) => {
                //if (data == null) {
                 //   window.location.href = '/'
                //}
                setMydata(data)
                var temp = []
                var paragraph_count = 0
                var image_count = 0
                for (const key in data.structure) {
                    if (data.structure[key] == 'title') {
                        temp.push(<Title>{data['title']}</Title>)
                    } else if (data.structure[key] == "paragraph") {
                        temp.push(<Paragraph> {data.paragraphs[paragraph_count]}</Paragraph>)
                        paragraph_count += 1
                    } else if (data.structure[key] == "mainimage") {
                        temp.push(<MainImage image={data.images[image_count]} />)
                        image_count += 1
                    }
                }
                setComponent(temp)
                setDataLoaded(true)
            })
        }
    }, [])
    const handleClick = (param) => {
        console.log('clicked')
        console.log(param)
        if (displayImage) {
            setDisplayImage(false)
        } else {
            setDisplayImage(true)
        }
    }
    console.log(mydata)
    
    return (
        <div className='mb-20'>
            <div className='mt-2'>
                <a href='/' className='font-serif font-bold text-gray-500'>⮪ Home</a>
            </div>
            <div className='flex gap-2 flex-col border-t'>
                {component}
                <div className='border-t pt-4'>
                    <Lister></Lister>
                </div>

                {displayImage ? imagePopup() : null}
            </div>
        </div>
    )
}
export default Article