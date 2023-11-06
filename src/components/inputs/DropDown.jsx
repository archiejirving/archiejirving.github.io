import { useState, useEffect } from "react"
import loadOptions from "../../middleware/loadOptions"
function DropDown(props) {
    const [selectedType, setSelectedType] = useState(null)
    var options = loadOptions(props.options_type)
    useEffect(() => {
        if (props.selectedType != "") {
            let new_option = loadOptions(props.options_type+"Search", props.selectedType)
            if (new_option != "") {
                setSelectedType(new_option)
                props.formDataDispatch({type: 'input', name: props.data_type, value: new_option})
            }
        }
    }, [props.selectedType]);
    const handleChange = (e) => {
        setSelectedType(e.target.value)
        props.handleChange(e)
        props.formDataDispatch({type: 'input', name: props.data_type, value: e.target.value})
    }
    return (
        <div>
            <div className="">{props.show_requirement ? <p className="text-[10px]">{props.required ? 'Required' : 'Optional'}</p> : ''}<p className={props.required ? 'font-bold' : ''}>{props.label}</p></div>
            <select className="text-black w-[100%]" onChange={handleChange} defaultValue={selectedType} value={selectedType}>
                <option className="text-black" value="" selected="true"></option>
                {options.map(option => { return <option value={option}>{option.toUpperCase()}</option> } )}
            </select>
        </div>
    )
}
export default DropDown