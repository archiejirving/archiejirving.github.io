function Paragraph(props) {
    return (
        <div className="w-[100%] flex justify-center mt-2 mb-2">
            <p className="w-[80%] font-serif">{props.children}</p>
        </div>
    )
}
export default Paragraph