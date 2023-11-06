import SearchWithOptions from "../../components/inputs/SearchWithOptions"
import DropDown from "../../components/inputs/DropDown"
import { useState } from "react"

function BelligerentRow(props) {
    const [belligerent, setBelligerent] = useState("")
    const [unit, setUnit] = useState("")
    const handleChange = (e) => {
        setUnit("")
        setBelligerent(e.target.value)
    }

    const handleTypeChange = (e) => {
        setUnit(e.target.value)
    }
    return (
        <div className="flex gap-5 border-t border-b pt-2 pb-2">
            <DropDown handleChange={handleChange} selectedType={unit} formDataDispatch={props.formDataDispatch}
                        data_type="belligerent" options_type="belligerent"
                        show_requirement
                        label="Belligerent"
                        required/>
            <div className="border-l border-black"></div>
            <SearchWithOptions options_param={belligerent} handleChange={handleTypeChange} selectedType={unit} formDataDispatch={props.formDataDispatch}
                        data_type="unit" options_type="unitWithBelligerent"
                        show_requirement
                        label="Unit"/>
        </div>
    )
}

export default BelligerentRow
