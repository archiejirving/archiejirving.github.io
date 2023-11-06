import { useReducer, useState, createContext } from "react"

import ImageBucket from "../../components/ImageBucket"
import TitleSection from "../../components/admin/TitleSection"
import SearchWithOptions from "../../components/inputs/SearchWithOptions"
import DropDown from "../../components/inputs/DropDown"
import EquipmentRow from "../../components/forms/EquipmentRow"
import BelligerentRow from "../../components/forms/BelligerentRow"
import formDataReducer from "../../reducers/formDataReducer"
function CreateEquipmentType() {
    const [equipmentType, equipmentTypeDispatch] = useReducer(formDataReducer, {})

    return (
        <div>
            <div className='flex'>
                <div className='bg-white text-black rounded-[10px] flex flex-col p-2 w-fit'>
                    <TitleSection title="Add Equipment Type"></TitleSection>
                    <BelligerentRow formDataDispatch={equipmentTypeDispatch}></BelligerentRow>
                    <p>Reference Images:</p>
                    <ImageBucket></ImageBucket>
                </div>
            </div>
        </div>
    )
}
export default CreateEquipmentType