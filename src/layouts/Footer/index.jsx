import owl from '../../assets/images/owl.png'
import helmet from '../../assets/images/helmet.png'
function Footer() {
    return (
        <div className="w-[100%] text-center p-1 bg-slate-50 flex justify-center gap-10">
            <div className="flex flex-col text-left justify-center">
                <a>Blog</a>
                <a>Database</a>
                <a>Log In</a>
            </div>
            <div className='w-[10vh]'>
                <div className='w-[100%] items-center m-auto content-center'>
                    <img src={helmet}></img>
                </div>
                <p className="text-[30px] viaappia">ARMADA ROTTA</p>
            </div>
            <div className="flex flex-col text-right justify-center"> 
                <a>Our Contributors</a>
                <a className='text-[50px]'>𝕏</a>
            </div>
        </div>
    )
}

export default Footer