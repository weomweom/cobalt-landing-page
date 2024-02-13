import StyledButton from "./StyledButton";

import arrow from '../img/Arrow.svg';
import stars from '../img/stars.png';

function Header() {
    return ( 
        <div className='flex flex-col justify-center h-[100dvh] text-center relative'>
            <h1 className="font-bold text-7xl bg-gradient-to-r from-white from-10% to-[#71717A] text-transparent bg-clip-text">Unleash the power of<br/>intuitive finance</h1>
            
            <h4 className="pt-8 text-xl leading-8">Say goodbye to the outdated financial tools. Every small business owner,<br/>regardless of the background, can now manage their business like a pro. Simple.<br/>Intuitive. And never boring.</h4>
            <div className="pt-14"><StyledButton link={{label: 'Join the waitlist', link: '#'}}/></div>
            <div className="flex flex-col items-center pt-14 gap-3">
                <span>Learn more</span>
                <img className="animate-wiggle" src={arrow} alt='arrow'/>
            </div>

            <img src={stars} alt='stars' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-[-1] select-none'/>
        </div>
    );
}

export default Header;