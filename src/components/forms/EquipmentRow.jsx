import SearchWithOptions from "../../components/inputs/SearchWithOptions"
import DropDown from "../../components/inputs/DropDown"
import { useState } from "react"

function EquipmentRow(props) {
    const [category, setCategory] = useState("")
    const [equipmentType, setEquipmentType] = useState("")
    const handleChange = (e) => {
        setEquipmentType("")
        setCategory(e.target.value)
    }

    const handleTypeChange = (e) => {
        setEquipmentType(e.target.value)
    }
    return (
        <div className="flex gap-5 border-t border-b pt-2 pb-2">
            <DropDown handleChange={handleChange} selectedType={equipmentType} formDataDispatch={props.formDataDispatch}
                        data_type="equipment_category" options_type="equipmentCategory"
                        label="Equipment Category"
                        show_requirement
                        required/>
            <div className="border-l border-black"></div>
            <SearchWithOptions options_param={category} handleChange={handleTypeChange} selectedType={equipmentType} formDataDispatch={props.formDataDispatch}
                        data_type="equipment_type" options_type="equipmentTypeWithCategory" 
                        label="Equipment Type"
                        show_requirement
                        required/>
        </div>
    )
}

export default EquipmentRow
