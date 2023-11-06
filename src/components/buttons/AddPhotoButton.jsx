function AddPhotoButton(props) {
    return (
        <button type="submit" className="border-b font-bold bg-gray-100 rounded p-[0px_10px] hover:bg-slate-300 border-l-4 border-l-black" onClick={props.handleChange}>+Add Image</button>
    );
}

export default AddPhotoButton;
