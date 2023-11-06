import { useState, useEffect, useContext } from 'react'
import { Form } from 'react-router-dom'

function ConditionButton(props) {
    const [active, setActive] = useState(props.active)
    useEffect(() => {
        setActive(props.active)
    }
    , [props.active])

    const otherStyles = ' rounded p-1'
    return (
        <div>
            <button value={props.styles.text} active={active} className={active ? props.styles.color+' font-bold'+otherStyles : 'bg-slate-200 rounded p-1 hover:bg-slate-100'} onClick={props.handleClick}>{props.styles.text}</button>
        </div>
    )
}

ConditionButton.defaultProps = {
    "styles": {
        "color": "red",
        "text": "Destroyed"
    }
}


const conditions = {
    "destroyed": {
        "text": "Destroyed",
        "color": "bg-red-400",
    },
    "captured": {
        "text": "Captured",
        "color": "bg-yellow-400",
    },
    "abandoned": {
        "text": "Abandoned",
        "color": "bg-gray-400"
    },
    "damaged": {
        "text": "Damaged",
        "color": "bg-blue-400",
    }
}
function ConditionButtons(handleClick) {
    
    return Object.keys(conditions).map((condition, index) => {
        return (
            <ConditionButton styles={conditions[condition]} key={index} active={false} handleClick={handleClick}></ConditionButton>
        )
})
}

function ConditionSection(props) {   
    var active = null
    
    const handleClick = (e) => {
        setConditionButtons(conditionButtons.map((button, index) => {
            if (button.props.styles.text == e.target.value && active != index) {
                e.target.active = true
                active = index
                console.log(index)
                console.log(active)
                props.formDataDispatch({type: 'input', name: 'condition', value: e.target.value})
                return <ConditionButton styles={button.props.styles} key={index} active={true} handleClick={handleClick}></ConditionButton>
            } else if (button.props.styles.text == e.target.value && active == index) {
                e.target.active = false
                console.log('here')
                active = null
                props.formDataDispatch({type: 'input', name: 'condition', value: null})
                return <ConditionButton styles={button.props.styles} key={index} active={false} handleClick={handleClick}></ConditionButton>
            } else {
                e.target.active = false
                console.log(e.target.active)
                return <ConditionButton styles={button.props.styles} key={index} active={false} handleClick={handleClick}></ConditionButton>
            }
        }))
    }
    const [conditionButtons, setConditionButtons] = useState(() => ConditionButtons(handleClick))


    return (
        <div>
            <div className=""><p className="text-[10px]">Required</p><p className="font-bold">Equipment Condition</p></div>
            <div className="text-black flex gap-1">
            {conditionButtons}
            </div>
        </div>
    )
}
export default ConditionSection
