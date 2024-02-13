import app from '../img/app.png';

function Content() {
    return (
        <>
            <div className='flex justify-center items-center h-[100dvh]'>
                <img src={app} alt='app screenshot' className='max-h-[calc(100dvh-100px)]'/>
            </div>
            <div className='flex gap-5 pt-20 px-0 xl:px-20'>
                <h3 className='flex-1 font-bold text-[40px] bg-gradient-to-r from-white from-10% to-[#71717A] text-transparent bg-clip-text leading-10'>Who said finance has to be boring?</h3>
                <p className='flex-1'>With Cobalt, managing your business finances is effortless, empowering, and anything but boring. Our intuitive platform brings clarity to your cash flow, simplifies your financial decision-making, and puts the power of advanced financial management right at your fingertips. <span className='text-[--accent-text-color]'>Say no to spreadsheets and tools designed in the 80s.</span></p>
            </div>
            <div className='pt-20'>

            </div>
        </>
    );
}

export default Content;