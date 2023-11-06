function PageButton(props) {
    return (
        <button className="bg-white rounded text-black p-[0px_6px] hover:bg-slate-500" value={props.value} onClick={props.onClick}>
            {props.text}
        </button>
    )
}
PageButton.defaultProps = {
    text: '#',
    value: 0,
    onClick: () => {}
}

export default PageButton