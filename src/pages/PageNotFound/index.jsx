import owl from '../../assets/images/owl.png';


function PageNotFound() {
    return (
        <div className='w-[100%] flex justify-center h-[100vh]'>
            <div className='text-center border rounded p-5 bg-nav-bg h-fit mt-[20vh]'>
                <img src={owl} className="h-[100px] pl-[0px] m-auto"></img>
                <h1 className='text-bold text-[50px]'>404</h1>
                <h1>Page not found</h1>
                <a className='bg text-[14px] underline text-gray-500' href="/">home</a>
            </div>
        </div>
    );
}

export default PageNotFound;