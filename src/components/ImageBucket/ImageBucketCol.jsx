import { useState, useEffect} from 'react'
function ImageSection(props) {
    const imgurl = URL.createObjectURL(props.image.image)
    
    function handleDelete() {
        props.dispatch({type: 'remove', id: props.image.id})
    }
    function handleClick() {
        props.changeMainImg(props.image.id)
    }

    return (
        <div className="w-[100%] aspect-square border relative hover:cursor-pointer hover:ring">
            <a onClick={handleClick}>
                <img src={imgurl || 'https://via.placeholder.com/150'} className="absolute h-[100%] object-cover"></img>
            </a>
            <button onClick={handleDelete} className="bg-black rounded absolute right-0 hover:border hover:bg-red-600 text-white" >&#10006;</button>
        </div>
    )
}

function ImageBucketCol(props) {
    const [imagesecs, setImagesecs] = useState([])

    if (imagesecs.length != props.images.length) {
        const imageurls = props.images.map((image, index) => {
            return <ImageSection image={image} key={index} id={image} dispatch={props.dispatch} changeMainImg={props.changeMainImg}></ImageSection>
        })
        setImagesecs(imageurls)
    }

    return (
        <>
            <div className="flex flex-col border p-0 h-[100%] overflow-y-auto no-scrollbar px-1">
                {imagesecs}
            </div>
        </>
    )
}

export default ImageBucketCol