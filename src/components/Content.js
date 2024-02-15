import app from '../img/app.png';
import card1 from '../img/card-1.png';
import card2 from '../img/card-2.png';
import card3 from '../img/card-3.png';
import card4 from '../img/card-4.png';
import card5 from '../img/card-5.png';

// -------- maybe I'll separate it to components later --------

function Content() {
    return (
        <>
            <div className='flex justify-center items-center h-[100dvh]'>
                <img src={app} alt='app screenshot' className='max-h-[calc(100dvh-100px)]'/>
            </div>
            <div className='flex gap-5 pt-20'>
                <h3 className='flex-1 header'>Who said finance has to be boring?</h3>
                <p className='flex-1'>With Cobalt, managing your business finances is effortless, empowering, and anything but boring. Our intuitive platform brings clarity to your cash flow, simplifies your financial decision-making, and puts the power of advanced financial management right at your fingertips. <span className='text-[--accent-text-color]'>Say no to spreadsheets and tools designed in the 80s.</span></p>
            </div>

            <div className='pt-20'>
                <h3 className='header inline-block pb-5'>Everything you need.<br/> Nothing you don’t</h3>
                <p className='max-w-[50%]'>
                    Financial management and visibility in one place. Experience <span className='text-[--accent-text-color]'>a flexible toolkit</span>  that makes every task feel like a breeze.
                </p>
                <div className='grid grid-cols-3 gap-8 py-8'>
                    <div className="card">
                        <img src={card1} alt="" />
                        <div>
                            <h5>Insights at your fingertips</h5>
                            <p>All your data and finances in one place to provide quick answers and make decisions instantly</p>                        
                        </div>
                    </div>
                    <div className="card">
                        <img src={card2} alt="" />
                        <div>
                            <h5>Manage in real time</h5>
                            <p>Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.</p>                        
                        </div>
                    </div>
                    <div className="card">
                        <img src={card3} alt="" />
                        <div>
                            <h5>Important business alerts</h5>
                            <p>Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.</p>                            
                        </div>
                    </div>
                    <div className='col-span-3 grid grid-cols-5 gap-8'>
                        <div className="card col-span-3">
                            <img src={card4} alt="" />
                            <div>
                                <h5>Connect all your apps</h5>
                                <p>Bring your data with our built-in integrations for accounting, revenue tools and banking.</p>
                            </div>
                        </div>
                        <div className="card col-span-2">
                            <img src={card5} alt="" />
                            <div>
                                <h5>You’re in control</h5>
                                <p>Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;