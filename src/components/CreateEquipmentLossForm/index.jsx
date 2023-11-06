import ConditionSection from "../QueryForm/ConditionSection"
import SelectDate from "../admin/SelectDate"
import EquipmentRow from "../forms/EquipmentRow"

function CreateEquipmentLossForm(props) {

    return (
        <div>
            <div>
                <div className="flex gap-5 border-t border-b pt-2 pb-2">
                    <div>
                        <div>
                            <p className="text-[10px]">Required</p>
                            <h1 className="text-bold font-bold">Belligerent </h1>
                        </div>
                        <select className="text-black">    
                            <option className="text-black" value="Truck">Unkown</option>
                            <option className="text-black" value="Trailer">Ukraine</option>
                            <option className="text-black" value="Other">Russia</option>
                        </select>
                    </div>
                    <div className="border-l border-black"></div>
                    <div>
                        <div className=""><p className="text-[10px]">Optional</p><p>Unit: </p></div>
                        <input list="unitType" placeholder="e.g. 58CAA" className="border rounded pl-[10px]"></input>
                        <datalist id="unitType">
                            <option value="Truck"></option>
                            <option value="Trailer"></option>
                            <option value="Other"></option>
                        </datalist>
                    </div>
                </div>
                <EquipmentRow formDataDispatch={props.formDataDispatch}></EquipmentRow>
                <div className="flex gap-5 pt-2 pb-2">
                    <ConditionSection formDataDispatch={props.formDataDispatch}></ConditionSection>
                    <div className="border-l border-black "></div>
                    <SelectDate formDataDispatch={props.formDataDispatch}></SelectDate>
                </div>
            </div>
        </div>
    )
}
export default CreateEquipmentLossForm 