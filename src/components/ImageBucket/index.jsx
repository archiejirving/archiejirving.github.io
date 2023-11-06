// Might be the worst code to ever exist

import { useState, useReducer, useEffect } from "react"

import AddImageForm from "./AddImageForm"
import ImageBucketCol from "./ImageBucketCol"
import imageBucketReducer from "../../reducers/imageBucketReducer"

function ImageBucket(props) {
    const [images, dispatch] = useReducer(imageBucketReducer, [])
    const [mainImg, setMainImg] = useState([null,null])
    var mainImgCurrent = mainImg
    // awful way of doing this, change it to a reducer later
    function changeMainImg(id) {
        if (mainImgCurrent[1] != id) {
            const image = images.find(image => image.id == id)
            mainImgCurrent = [URL.createObjectURL(image.image), image.id]
            setMainImg(mainImgCurrent)
        }
    }
    useEffect(() => {
        if (!images.map(image => image.id).includes(mainImg[1])) {
            if (images.length > 0) {
                setMainImg([URL.createObjectURL(images[images.length-1].image), images[images.length-1].id])
            }
            else {
                setMainImg([null,null])
            }
        }}

    , [images]) 

    function handleSubmit(event) {
        event.preventDefault()
        const image = event.target.fileholder.files[0]
        const source = event.target.source.value
        const id = Math.floor(Math.random() * 1000000)
        dispatch({type: 'add', image: image, source: source, id: id})
        setMainImg([URL.createObjectURL(image), id])
        // remove the image from the fileholder
        event.target.fileholder.value = null
        event.target.source.value = null
    }

    return (
        <div className='p-2 border rounded'>
            <div className='w-[600px]'>
                <AddImageForm handleSubmit={handleSubmit}></AddImageForm>
                
                <div className="flex w-[100%] aspect-[5/4]">
                    <div className="w-[80%]">
                        <div className="border-spacing-3 border-[1px] rounded-2xl h-[100%] flex bg-gray-100">
                            <img src={mainImg[0]} className="w-[100%] object-contain"></img>
                        </div>
                    </div>  
                    <div className="w-[20%]">
                        <ImageBucketCol images={images} dispatch={dispatch} changeMainImg={changeMainImg}></ImageBucketCol>
                    </div>
                </div>
            </div>
        </div>
        

    )
}
export default ImageBucket