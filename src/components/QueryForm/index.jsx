import BelligerentRow from "../forms/BelligerentRow"
import EquipmentRow from "../forms/EquipmentRow"
import ConditionSection from "./ConditionSection"
import SearchButton from "../buttons/SearchButton"
function QueryForm(props) {
    return (
        <div>
            <div className="flex p-1 justify-between border">
                <div className="flex bg-gray-50">
                    <div >
                        <BelligerentRow formDataDispatch={props.formDataDispatch}></BelligerentRow>
                    </div>
                    <div>
                        <EquipmentRow formDataDispatch={props.formDataDispatch}></EquipmentRow>
                    </div>
                </div>
                <div className="bg-gray-50">
                    <ConditionSection formDataDispatch={props.formDataDispatch}></ConditionSection>
                </div>
            </div>
            <div className="flex justify-start mt-2">
                <SearchButton></SearchButton>
            </div>
        </div>
    )
}
export default QueryForm