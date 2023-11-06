function SubmitEntryButton(props) {
    return (
        <button type="submit" className="border-b font-bold bg-gray-100 rounded p-[0px_10px] 
                                        hover:bg-slate-300 border-l-black text-[20px] w-[100%]" onClick={props.handleSubmit}>Submit</button>
    );
}

SubmitEntryButton.defaultProps = {
    text: "Button",
    value: 0,
    onClick: () => {}
}

export default SubmitEntryButton;
