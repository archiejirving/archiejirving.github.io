function OutwardsLink(props) {
    return (
        <div className={props.number == "odd" ? "bg-slate-50 w-[100%] hover:bg-slate-100 hover:text-red-900" : "bg-white hover:bg-slate-100 hover:text-red-900"}>
            <a href={props.link} target="_blank" rel="noreferrer" >{props.text}</a>
        </div>
    )
}


function DatabaseWidget() {
    return (
        <div className="border-t border-b p-2 w-[20vh]">
            <div className="text-[20px] border-b font-serif">
                <p>Explore our Lists</p>
            </div>
            <OutwardsLink link="https://www.google.com" text="Israel-Gaza Conflict" number="even"/>
            <OutwardsLink link="https://www.google.com" text="Russo-Ukraine 2014-2022" number="odd"/>
            <OutwardsLink link="https://www.google.com" text="Sudan Crisis" number="even"/>
            <OutwardsLink link="https://www.google.com" text="Azerbijan" number="odd"/>
        </div>
    )
}

export default DatabaseWidget