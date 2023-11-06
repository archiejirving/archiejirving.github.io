function SelectDate(props) {
    const handleChange = (e) => {
        if (e.target.value == '') {
            props.formDataDispatch({type: 'input', name: 'date', value: null})
        } else {
            props.formDataDispatch({type: 'input', name: 'date', value: e.target.value})
        }
    }
    return (
        <div>
            <div className=""><p className="text-[10px]">Required</p><p className="font-bold">Select Date</p></div>
            <input type="date" className="" onChange={handleChange}></input>
        </div>
    )
}

export default SelectDate
