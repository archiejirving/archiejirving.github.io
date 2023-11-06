import SubmitEntryButton from "../buttons/SubmitEntryButton"

function AttributeButton(props) {
    return (
        <button className="bg-[#F5F5F5] rounded px-3 py-1 hover:text-bold hover:bg-slate-500">{props.text}</button>
    )
}

AttributeButton.defaultProps = {
    text: "Attribute",
    color: "bg-[#F5F5F5]"
}

function AttributeContainer(props) {
    return (
        <div className="flex flex-wrap gap-2">
            {props.children}
        </div>
    )
}

function RightBar(props) {
    return (
        <div className="createLossRightBar">

            <div className="p-2 border rounded">
              <p className="text-[20px] font-bold">Location</p>
              <input type="search" className="border pl-2" placeholder="search"></input>
              {/* imbed openstreetmap */}
              <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=30.9375%2C46.0732%2C31.1133%2C46.1417&amp;layer=mapnik&amp;marker=46.1075%2C30.9984" width="300" height="200" title="OpenStreetMap"></iframe>
                
            </div>
            <div className="border p-2">
                <p className="text-[20px] font-bold">Add Attributes</p>
                <AttributeContainer>
                  <AttributeButton text="V" color="bg-[#F5F5F5]"/>
                  <AttributeButton text="Z" color="bg-[#F5F5F5]"/>
                  <AttributeButton text="+" color="bg-[#F5F5F5]"/>
                  <AttributeButton text="□" color="bg-[#F5F5F5]"/>
                  <AttributeButton text="△" color="bg-[#F5F5F5]"/>
                  <AttributeButton text="O" color="bg-[#F5F5F5]"/>
                </AttributeContainer>
            </div>
            <div className="px-10 py-5 bg-slate-50 mt-10">
              <SubmitEntryButton text="submit" handleSubmit={props.handleSubmit}/>
            </div>
        </div>
    )
}

export default RightBar