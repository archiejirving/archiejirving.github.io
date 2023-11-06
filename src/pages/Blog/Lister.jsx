import { useState, useEffect, useReducer, useTransition } from "react"
import loadListData from "./loadlistdata"
import { data } from "autoprefixer"
import { json } from "react-router-dom"
import flags from "../../data/flags.json"
import vehicles from "../../data/vehicles.json"
import tank from '../../assets/svg/vehicles/tank.svg'
import listBuilderReducer from "../../reducers/listBuilderReducer"
function SummaryComponent(props) {
    const [data, setData] = useState(null)
    return (
        <div className="flex bg-gray-300 w-[100%] justify-between border-b-black border-b-2 h-[15vh]">
            <div className="w-[20vh] flex justify-center flex-col">
                <p className="font-bold text-[10px] text-center mb-0 pb-0 h-1">Belligerent</p>
                <p className="text-[30px] text-center h-10">{props.title}</p>
                <div className="flex justify-center">
                    <img className="w-[100px]" src={flags.Israel}></img>
                </div>
            </div>
            <div className="flex-col align-middle justify-items-center content-center items-center">
                <div className="flex items-center justify-center rounded">
                    <div className=" w-[100%]">
                        <p className="font-bold text-center">Total</p>
                        <div className=" w-[100%] border-t">
                            <p className="font-bold text-center text-[40px]">{props.total}</p>
                        </div>
                    </div>
                </div>
                <div className="text-right flex justify-center w-full">
                    <div className="text-center border-t-red-500 border-t rounded-t-xl">
                        <p className="font-bold text-[20px]">{props.conditionTotals[0]}</p>
                        <p className="font-bold text-[10px] ps-2">Destroyed </p>
                    </div>
                    <div className="text-center border-t-yellow-500 border-t rounded-t-xl">
                        <p className="font-bold text-[20px]">{props.conditionTotals[1]}</p>
                        <p className="font-bold text-[10px] ps-2">Captured </p>
                    </div>
                    <div className="text-center border-t-gray-500 border-t rounded-t-xl">
                        <p className="font-bold text-[20px]">{props.conditionTotals[2]}</p>
                        <p className="font-bold text-[10px] ps-2">Abandoned </p>
                    </div>
                    <div className="text-center border-t-blue-500 border-t rounded-t-xl">
                        <p className="font-bold text-[20px]">{props.conditionTotals[3]}</p>
                        <p className="font-bold text-[10px] ps-2">Damaged </p>
                    </div>
                </div>
            </div>
            <div className="w-[20vh] flex justify-center items-center">
                <img className="h-[12vh]" src="https://mapsvg.com/static/maps/geo-calibrated/israel.svg"></img>
            </div>
        </div>
    )
}

function CategorySection(props) {
    const [types, setTypes] = useState([])
    useEffect(() => {
        var temp = []
        for (const key in props.data) {
            temp.push(<TypeSection key={key} rowselection={props.rowselection} title={key} data={props.data[key]} dispatch={props.dispatch}/>)
        }
        setTypes(temp)

    }, [props.rowselection])
    return (
        <div className="border-b-2 border-b-gray-300">
            <div className="bg-gray-100 text-center border-b-2 border-b-gray-300">
                <p className="font-bold text-[25px]">{props.title[0].toUpperCase()}{props.title.slice(1).replaceAll("_", " ")}</p>
            </div>
            <div className="pl-2">
            {types}
            </div>
        </div>
    )
}
function TypeSection(props) {
    const [losses, setLosses] = useState([])
    const [total, setTotal] = useState(0)
    const [conditionTotals, setConditionTotals] = useState([0, 0, 0, 0])
    const [flag, setFlag] = useState(null)
    const [rows, setRows] = useState(-1)
    const [selected, setSelected] = useState(false) 
    const [selectedLoss, setSelectedLoss] = useState(null)
    const handleClick = (param) => {
        setRows(Math.floor(param/6))
        if (selectedLoss == param) {
            setSelectedLoss(null)
            setSelected(false)
        } else {
            setSelectedLoss(param)
            setSelected(true)
        }
    }
    useEffect(() => {
        var temp = [[]]
        var temp_condition_totals = [0, 0, 0, 0]
        for (const key in props.data) {
            if (temp[temp.length - 1].length == 6) {
                temp.push([])
            }
            if (props.data[key].condition == "destroyed") {
                temp_condition_totals[0] += 1
            } else if (props.data[key].condition == "captured") {
                temp_condition_totals[1] += 1
            } else if (props.data[key].condition == "abandoned") {
                temp_condition_totals[2] += 1
            } else if (props.data[key].condition == "damaged") {
                temp_condition_totals[3] += 1
            }

            temp[temp.length - 1].push(<LossWidget key={key} handleClick={handleClick} title={key} data={props.data[key]} url={props.data[key].url} dispatch={props.dispatch} equipment={props.title} isselected={selectedLoss}/>)
            
        }
        setConditionTotals(temp_condition_totals)
        setLosses(temp)
        setTotal((temp.length - 1) * 6 + temp[temp.length - 1].length)
        try {
            setFlag(flags[vehicles[props.title].origin])
            
        }
        catch (error) {
            setFlag(flags["Israel"])
            console.log("here")
        }
        if (selectedLoss != null && props.rowselection.equipment != props.title && selected == false) {
            setSelectedLoss(null)
            setSelected(false)
        } else if (selected == true) {
            setSelected(false)
        }

    }, [selectedLoss, props.rowselection])


    return (
        <div className="w-[100%] mb-1">
            <div className="flex border-t border-b border-double  w-[100%]">
                <div>
                    <div className="flex items-center border-b bg-gray-50">
                        <img className="w-[30px] h-fit" src={flag}></img>
                        <p className="font-bold text-gray-800 pl-2 pr-2 w-[30vh]">{total} {props.title[0].toUpperCase()}{props.title.slice(1)}: </p>
                    </div>
                    <div className=" flex pl-10">
                        <div className="flex gap-2 opacity-60">
                            <div>
                                {conditionTotals[0] == 0 ? null : 
                                    <div className="flex gap-2">
                                        <p className="font-bold font-mono text-[10px]">{conditionTotals[0]}</p>
                                        <p className="text-red-500 font-bold font-mono text-[10px]">Destroyed</p>
                                    </div>
                                }
                                {conditionTotals[1] == 0 ? null : 
                                    <div className="flex gap-2">
                                        <p className="font-bold font-mono text-[10px]">{conditionTotals[1]}</p>
                                        <p className="text-yellow-500 font-bold font-mono text-[10px]">Captured</p>
                                    </div> 
                                }
                            </div>
                            <div>

                                {conditionTotals[2] == 0 ? null : 
                                <div className="flex gap-2 border-l">
                                    <p className="font-bold font-mono text-[10px]">{conditionTotals[2]}</p>
                                    <p className="text-gray-500 font-bold font-mono text-[10px]">Abandoned</p>
                                </div>
                                }
                                {conditionTotals[3] == 0 ? null : 
                                    <div className="flex gap-2 border-l">
                                        <p className="font-bold font-mono text-[10px]">{conditionTotals[3]}</p>
                                        <p className="font-mono text-[10px] text-blue-500">Damaged</p>
                                    </div>   
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[100%] border-l py-3">
                    {losses.map((row) => {
                        return (
                            <div>
                                <div className="flex w-[90%] mx-auto">
                                    {row}
                                </div>
                                {props.rowselection.equipment == props.title && row[0].props.title/6 == rows ? <div className="px-4 pb-1 border-b border-dashed mb-1"><Popout text={props.rowselection} dispatch={props.dispatch}></Popout></div> : null}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
function LossWidget(props) {
    const [url, setUrl] = useState(props.data["url"])
    const handleClick = () => {
        props.dispatch({type: "select", number: props.title, url: props.data["url"], equipment: props.equipment, condition: props.data.condition})
        props.handleClick(props.title)

    }

    return (
        <div className={props.isselected == props.title ? "pr-2 rounded opacity-100 hover:opacity-90 border-l border-r border-t-black border-t bg-opacity-20 "+
        (props.data.condition == "destroyed" ? "bg-red-300 " : 
        (props.data.condition == "captured" ? "bg-yellow-200 " : 
        (props.data.condition == "abandoned" ? "bg-gray-500 " : 
        (props.data.condition == "damaged" ? "bg-blue-300" : null)))) : 
        "pr-2 rounded opacity-70 hover:opacity-100 bg-opacity-10 hover:border-gray-400 hover:border-dashed border-white border "+ 
        (props.data.condition == "destroyed" ? "bg-red-300 " : 
        (props.data.condition == "captured" ? "bg-yellow-200 " : 
        (props.data.condition == "abandoned" ? "bg-gray-500 " : 
        (props.data.condition == "damaged" ? "bg-blue-500" : null))))}>
            <a href={props.data.url}>
                <p className="font-bold text-[10px] text-gray-700 text-center h-2">{(Number(props.title)+1).toString()} {props.data.condition}</p>
            </a>
            <a className='w-fit' onClick={handleClick}>
                <div className='hover:cursor-pointer w-fit'>
                    <img src={tank} className='w-[70px]'></img>
                </div>
            </a>
            {props.isselected == props.title ? <div className="w-0 h-0 mx-auto
                                        border-l-[6px] border-l-transparent
                                        border-b-[3px] border-b-black
                                        border-r-[6px] border-r-transparent"></div> : null}
        </div>
    )
}
function MediaLoading() {
    return (
        <div className="flex justify-center animate-pulse items-center h-full">
            <div role="status align-middle">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}
function FullScreenImage(props) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 z-50 cursor-zoom-out" onClick={props.forclick}>
            <div className="flex justify-center items-center h-full">
                <img className="h-[80vh]" src={props.url}></img>
            </div>
        </div>
    )
}
function Popout(props) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [data, setData] = useState(null)
    const [imageView, setImageView] = useState(false)

    const handleLoad = () => {
        setTimeout(() => {
            setData(props.text.url)
            setImageLoaded(true)
        }
        , 300);
    } 
    const handleClick = () => {
        props.dispatch({type: "clear"})
    }
    const handleImageClick = () => {
        setImageView(!imageView)
    }
    useEffect(() => {
        if (imageLoaded && data != props.text.url) {
            setImageLoaded(false)
        }
    }, [props.text])
    return (
        <div className='w-[100%] bg-black rounded animate-loadpopout overflow-hidden flex p-1'>

            <div className="flex justify-between h-32 animate-loadpopout2 w-[100%]">
                <div className="w-[20vh] bg-gradient-to-bl from-slate-800 justify-center flex animate-loadpopout2">
                    {imageLoaded ? null : <MediaLoading />}
                    <button onClick={handleImageClick}>
                        {imageView ? <FullScreenImage url={props.text.url} forclick={handleImageClick}/> : null}
                        <img className={imageLoaded ? "h-32 cursor-zoom-in animate-loadfadein" : "hidden"} src={props.text.url} onLoad={handleLoad}></img>
                    </button>
                </div>
                <div className="flex justify-between w-[32vh]">
                    <div className="flex-col gap-3 w-[32vh] pl-3">
                        <div className="flex justify-between">
                            {imageLoaded ? <p className="text-gray-400 animate-loadfadein font-bold font-mono pt-2">{props.text.equipment}</p> : <p className="w-[50%] animate-pulse bg-gray-800 text-gray-800 rounded h-5 my-auto mt-2">#?</p>}

                            <button className="hover:text-red-600 text-gray-600" onClick={handleClick}>
                                <p className="pr-2 text-[12px] font-mono font-bold">close ↑</p>
                            </button>
                        </div>
                        {imageLoaded ? 
                        <table className="text-gray-500 text-[10px] w-[75%] animate-loadfadein">
                            <tbody>
                                <tr className="bg-gray-900">
                                    <td>Number</td>
                                    <td className="text-right">{(Number(props.text.number)+1).toString()}</td>
                                </tr>
                                <tr>
                                    <td>Condition</td>
                                    <td className={"text-right "+ 
                                    (props.text.condition == "destroyed" ? "text-red-300 " : 
                                    (props.text.condition == "captured" ? "text-yellow-200 " : 
                                    (props.text.condition == "abandoned" ? "text-gray-500 " : 
                                    (props.text.condition == "damaged" ? "text-blue-500" : null))))}>{props.text.condition}</td>
                                </tr>
                                <tr className="bg-gray-900">
                                    <td>Location</td>
                                    <td className="text-right">Unknown</td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td className="text-right">2023-10-07</td>
                                </tr>
                                <tr className="bg-gray-900">
                                    <td>Source</td>
                                    <td className="text-right">[1]</td>
                                </tr>
                            </tbody>
                        </table>
                        : 
                        <div className="h-20 bg-gray-900 animate-pulse w-[75%] mt-2 rounded">

                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
function Lister(props) {
    const [mydata, setMydata] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)
    const [selected, selectedDispatch] = useReducer(listBuilderReducer, {})
    const [total, setTotal] = useState(0)
    const [conditionTotals, setConditionTotals] = useState([0, 0, 0, 0])
    const [components, setComponents] = useState([])
    useEffect(() => {
        if (!dataLoaded) {
            loadListData('israel_gaza').then((data) => {
                setMydata(data)
                var temp = []
                var temp_condition_totals = [0, 0, 0, 0]
                var temp_total = 0
                for (const key in data) {
                    temp.push(<CategorySection key={key} title={key} data={data[key]} rowselection={selected} dispatch={selectedDispatch}/>)
                    for (const key2 in data[key]) {
                        for (const key3 in data[key][key2]) {
                            temp_total += 1
                            if (data[key][key2][key3].condition == "destroyed") {
                                temp_condition_totals[0] += 1
                            } else if (data[key][key2][key3].condition == "captured") {
                                temp_condition_totals[1] += 1
                            } else if (data[key][key2][key3].condition == "abandoned") {
                                temp_condition_totals[2] += 1
                            } else if (data[key][key2][key3].condition == "damaged") {
                                temp_condition_totals[3] += 1
                            }
                        }
                    }
                }
                setTotal(temp_total)
                setDataLoaded(true)
                setComponents(temp)
                setConditionTotals(temp_condition_totals)
            })
        }
        if (selected != {}) {
            console.log("selected chabnge")
            setComponents(components.map((component) => {
                return (
                    <CategorySection key={component.props.title} title={component.props.title} data={component.props.data} rowselection={selected} dispatch={selectedDispatch}/>
                )
            } ))
        }
    }, [selected])
    //            {dataLoaded ? categories : null}
    //            {dataLoaded ? JSON.stringify(mydata) : <p>loading</p>}
    return (
        <div className="border rounded w-[90%] mx-auto">
            <SummaryComponent title="Israel" total={total} conditionTotals={conditionTotals}/>
            {components}
        </div>
    )
}
export default Lister