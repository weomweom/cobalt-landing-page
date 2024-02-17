function StyledButton({link}) {
    return (
        <div className='inline-block relative bg-[--bg-color] py-3 px-5 border-2 border-[#2e2e30] rounded-full transition ease-in cursor-pointer hover:text-[--accent-text-color] hover:border-[--accent-color]'>
            {link.label}                        
            <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[--accent-color] to-transparent"></span>
        </div>
    );
}

export default StyledButton;