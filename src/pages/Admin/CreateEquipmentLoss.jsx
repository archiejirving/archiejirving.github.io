import { useState, useReducer } from 'react'    
import ImageBucket from '../../components/ImageBucket'
import CreateEquipmentLossForm from '../../components/CreateEquipmentLossForm'
import TitleSection from '../../components/admin/TitleSection'
import RightBar from '../../components/CreateEquipmentLossForm/RightBar'
import formDataReducer from '../../reducers/formDataReducer'
import createtransaction from '../../middleware/createtransaction'
function CreateEquipmentLoss() {
    const [equipmentLoss, equipmentLossDispatch] = useReducer(formDataReducer, {})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(equipmentLoss)
        createtransaction(equipmentLoss)
    }
    return (
        <div>
            <div className='flex'>
                <div className='bg-white text-black rounded-[10px] flex flex-col p-2 w-fit'>
                    <TitleSection title="Add Equipment Loss"></TitleSection>
                    <CreateEquipmentLossForm formDataDispatch={equipmentLossDispatch}></CreateEquipmentLossForm>
                    <ImageBucket></ImageBucket>
                </div>
                <div className="border-[1px] mr-2 rounded border-dashed"></div>
                <RightBar handleSubmit={handleSubmit}></RightBar>
            </div>
            {equipmentLoss ? <p>{JSON.stringify(equipmentLoss)}</p> : null}
        </div>
    )
}

export default CreateEquipmentLoss