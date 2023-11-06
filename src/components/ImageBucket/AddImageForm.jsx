import { useState, useEffect } from "react";
import AddPhotoButton from "../buttons/AddPhotoButton";

function AddImageForm(props) {
    const [uploaded, setUploaed] = useState(false)
    const handleChange = (event) => {
        if (event.target.files[0]) {
            setUploaed(true)
        }
        else {
            setUploaed(false)
        }
    }
    const handleChangeSubmit = (event) => {
        if (uploaded) {
            setUploaed(false)
        }
    }
    
    return (
        <div className="flex w-[100%] flex-row rounded border-b-black border-b p-1 m-1 ">
            <form onSubmit={props.handleSubmit} className="flex flex-row justify-between w-[100%] gap-3">
                <div className="flex gap-2 flex-grow">
                    <input onChange={handleChange} type="file" id="fileholder" className='w-1 h-1 opacity-0 overflow-hidden absolute z-[-1]' name='fileholder' required></input>
                    <label for="fileholder" className="bg-slate-200 border rounded-sm hover:ring px-2">
                        {uploaded ? '✅ File Uploaded' : '📁 UPLOAD'}
                    </label>
                    <div className="flex gap-1 flex-grow">
                        <label>Source:</label>
                        <input type="text" name='source' className="bg-slate-100 pl-[5px] flex-grow" placeholder="https://example.com"></input>
                    </div>
                </div>
                <AddPhotoButton handleChange={handleChangeSubmit}></AddPhotoButton>
            </form>
        </div>
    );
}

export default AddImageForm;
