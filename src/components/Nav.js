import StyledButton from './StyledButton';
import logo from '../img/Icon.svg';

const navLinks = [
    {
        link: '#',
        label: 'Blog',
        isButton: false,
    },
    {
        link: '#',
        label: 'Join the waitlist',
        isButton: true,
    }
]

function Nav() {
    return (
        <div className='flex justify-between items-center h-[--nav-height] w-full fixed top-0 z-10 px-20 transition duration-200 ease-in bg-transparent backdrop-blur-md'>
            <img src={logo} alt="cobalt logo" />
            <ul className='flex items-center gap-x-6 list-none'>
                {navLinks.map((link, i) => (
                    <li key={i}>
                        {link.isButton ? <StyledButton link={link}/> : 
                            <a className='transition ease-in hover:text-[--accent-text-color]' href={link.link}>
                                {link.label}                        
                            </a>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Nav;