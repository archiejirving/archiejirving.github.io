function ResultsRow(props) {
    return (
        <>
            <tr className="border">
                <td>{props.id.slice(-2)}</td>
                <td className="w-[200px] h-[100px]">
                    <img className="w-[200px] h-[100px] hover:cursor-zoom-in" src={'https://via.placeholder.com/150'}></img>
                </td>
                <td className="w-[100px] h-[100px]">
                    <img className="w-[100px] h-[50px]" src={'https://via.placeholder.com/150'}></img>
                    <img className="w-[100px] h-[50px]" src={'https://via.placeholder.com/150'}></img>
                </td>
                <td>
                    <div>
                        <p className="text-[10px]">{props.category}</p>
                        <p className="font-bold">{props.type}</p>
                    </div>
                </td>
                <td>{props.date}</td>
                <td>{props.unit}</td>
                <td>Germany</td>
            </tr>
        </>
    )
}
ResultsRow.defaultProps = {
    id: '#1231',
    category: 'Tank',
    type: 'BTR-80',
    date: '11/11/2023',
    img: 'https://via.placeholder.com/150',
    unit: "58CAA"
}

export default ResultsRow