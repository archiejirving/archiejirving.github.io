import { Link } from 'react-router-dom';

function DashBoardSection(props) {
    return (
        <Link to={props.route}>
            <div className="border rounded p-2">
                <p>{props.text}</p>
            </div>
        </Link>
    )
}

function DashBoard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <p>Page Views:</p>
                <div className="border rounded p-2">
                    <p>Add Equipment Loss</p>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;
