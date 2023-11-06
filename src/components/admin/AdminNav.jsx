import { Link } from 'react-router-dom'

function AdminNavButton(props) {
    return (
        <Link to={props.route}>
            <button className="border-b p-2 rounded text-black w-[100%] text-left hover:bg-slate-200">{props.text}</button>
        </Link>
    )
}
function DashBoardButton(props) {
    return (
        <Link to={props.route}>
            <button className="p-2 rounded text-black w-[100%] text-left hover:bg-slate-200 font-bold bg-slate-100 border-l-black border-r-black border-l-[2px] border-r-[1px]">★ {props.text}</button>
        </Link>
    )
}

function AdminNav() {
    return (
        <div>
            <DashBoardButton text="Dashboard" route=''></DashBoardButton>
            <div className='mt-2 mb-2 border'></div>
            <p className="text-bold border-l pl-2 border-black">Equipment</p>
            <div className="flex flex-col pl-3 border-l mb-3">
                <AdminNavButton text="Add Equipment Loss" route='equipmentLoss'></AdminNavButton>
                <AdminNavButton text="Add Equipment Type" route='equipmentType'></AdminNavButton>
            </div>
            <p className="text-bold border-l pl-2 border-black">Factions</p>
            <div className="flex flex-col pl-3 border-l mb-1">
                <AdminNavButton text="Add Belligerent" route="belligerent"></AdminNavButton>
                <AdminNavButton text="Add Unit" route="unit"></AdminNavButton>
                <AdminNavButton text="Add Conflict/Event" route="conflict"></AdminNavButton>
            </div>
        </div>
    )
}

export default AdminNav