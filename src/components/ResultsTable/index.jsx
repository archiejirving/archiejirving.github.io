import ResultsRow from "./ResultsRow";

function ResultsTable(props) {
    return (
        <>
            <table className='table-fixed w-full border'>
                <thead>
                    <tr>
                        <th className='w-1/12'>#</th>
                        <th className="w-1/12">Image</th>
                        <th className='w-1/12'>Type</th>
                        <th className='w-1/12'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <ResultsRow></ResultsRow>
                    <ResultsRow></ResultsRow>
                    <ResultsRow></ResultsRow>
                    <ResultsRow></ResultsRow>
                    <ResultsRow></ResultsRow>
                    <ResultsRow></ResultsRow>
                    {props.rows}
                </tbody>
            </table>
        </>
    )
}
export default ResultsTable