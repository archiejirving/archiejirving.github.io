import owl from '../../assets/images/owl.png';
import armadarotta from '../../assets/images/armadarotta.png';
import helmet from '../../assets/images/helmet.png';
import { useState, useEffect } from 'react';
function NavButton(props) {
    return (
        <a className="mt-[10px] ml-[40px] text-black float-left text-[20px]
                  transition duration-[0.1s] ease-in-out
                  hover:text-[#616161] hover:border-b-[3px] viaappia" href={props.link}>{props.text}</a>
    );
}

function TitleSegment() {
    return (
        <div className="float-left">
            <a href="/" className='flex'>
                <img src={helmet} className='w-[50px] pt-1'></img>
                <p className="text-[30px] viaappia font-bold mt-1">ARMADA ROTTA</p>
            </a>
        </div>
    );
}

function TitleSegment2() {
    return (
        <div className="float-left">
            <a href="/">
                <div className='h-[40px]'>
                    <p className="text-[35px] viaappia font-bold">ARMADA</p>
                </div>
                <div className='flex'>
                    <img src={helmet} className='w-[50px]'></img>
                    <p className="text-[30px] viaappia font-bold">ROTTA</p>
                </div>
            </a>
        </div>
    );
}
function TitleSegment3() {
    return (
        <div className="float-left">
            <a href="/">
                <div className='h-[40px]'>
                    <p className="text-[35px] viaappia font-bold">ARMADA</p>
                </div>
                <div className='flex'>
                    <img src={helmet} className='w-[50px]'></img>
                    <p className="text-[30px] viaappia font-bold">ROTTA</p>
                </div>
            </a>
        </div>
    );
}

function Nav() {
    const [navSize, setNavSize] = useState(0)
    const [width, setWidth] = useState(window.innerWidth);
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setNavSize(1)
        } else if (window.scrollY < 50) {
            setNavSize(0)
        }
    }
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }
    , []);

    const isMobile = width <= 768;

    const styleBig = "h-[90px] bg-nav-bg border-b-black border-b-[3px] font-Trebuchet box-content sticky left-0 top-0 z-[1] overflow-hidden"
    const styleSmall = "h-[60px] bg-nav-bg border-b-black border-b-[2px] font-Trebuchet box-content sticky left-0 top-0 z-[1] overflow-hidden"
    return (
        <nav className={navSize==0 ? styleBig : styleSmall} onScroll={handleScroll}>
            <div className='w-[60%] h-[100%] m-auto'>
                {isMobile ? <TitleSegment3 /> : <></>}
                {navSize==0 ? <TitleSegment2 /> : <TitleSegment />}
                <NavButton text="BLOG" link="/blog" />
                <NavButton text="DATABASE" link="/database" />     
            </div>
        </nav>
    );
}

export default Nav;
