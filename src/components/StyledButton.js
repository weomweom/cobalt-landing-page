function StyledButton({link}) {
    return (
        <a className='relative bg-[--bg-color] py-3 px-5 border-2 border-[#2e2e30] rounded-full transition ease-in hover:text-[--accent-text-color] hover:border-[--accent-color]' href={link.link}>
            {link.label}                        
            <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent"></span>
        </a>
    );
}

export default StyledButton;