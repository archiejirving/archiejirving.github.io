import loadOptions from "../../middleware/loadOptions"
import { useState, useEffect, useId } from "react"

function SearchWithOptions(props) {
    const listId = useId()
    const [selectedType, setSelectedType] = useState(null)
    var options = loadOptions(props.options_type, props.options_param)
    useEffect(() => {
        if (!(options.includes(selectedType)) && props.selectedType == "" && props.selectedType != selectedType) {
            setSelectedType("")
            props.formDataDispatch({type: 'input', name: props.data_type, value: null})
        } 
        //else if (props.options_param == "" && props.selectedType == selectedType) {
        //    setSelectedType("")
        //}
    })
    const handleChange = (e) => {
        setSelectedType(e.target.value)
        props.handleChange(e)
        props.formDataDispatch({type: 'input', name: props.data_type, value: e.target.value})
    }

    return (
        <div>
            <div className=""><p className="text-[10px]">{props.required ? 'Required' : 'Optional'}</p><p className={props.required ? 'font-bold' : ''}>{props.label}</p></div>
            <input list={listId} placeholder="e.g. T-72" className="border rounded pl-[10px]" onChange={handleChange} value={selectedType} required={props.required}></input>
            <datalist id={listId}>
                <option value=""></option>
                {options.map(option => { return <option value={option}></option> } )}
            </datalist>
        </div>
    )
}

export default SearchWithOptions