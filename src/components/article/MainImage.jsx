function MainImage(props) {
    return (
        <div className="flex justify-center pb-2 border-y">
           <img className='w-[95%]' src={props.image}></img>
        </div>
    )
}
export default MainImage
