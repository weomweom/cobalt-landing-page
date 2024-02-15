import StyledButton from './StyledButton';
import X from './Icons/X';
import LinkedIn from './Icons/LinkedIn';
import Fb from './Icons/Fb';

function Footer() {
    return (
        <div className="flex flex-col h-[100dvh] bg-[url('img/footer-bg.png')] bg-no-repeat bg-cover px-20 pt-28">
            <div className='h-full flex flex-col justify-center items-center gap-10'>
                <span className='h-px w-1/3 bg-gradient-to-r from-transparent via-[--accent-color] to-transparent mb-12'></span>

                <h3 className='header text-center'>See where financial automation can <br/>take your business.</h3>
                <p>The first financial tool you'll love. And the last one you'll ever need.</p>
                <StyledButton link={{link: '#', label: 'Join the waitlist'}}/>
            </div>

            <div className='flex flex-col gap-5 pb-10 pt-20 text-sm'>
                <span className='h-0.5 w-full bg-[#1f3542] '></span>

                <div className='w-full flex justify-between'>
                    <div className='flex gap-6'>
                        <div>
                            © 2023 Cobalt Financial Technologies Inc.
                        </div>
                        <div className='cursor-pointer'>
                            Privacy Policy
                        </div>
                        <div className='cursor-pointer'>
                            Terms of Use
                        </div>
                    </div>

                    <div className='flex gap-8'>
                        <X/>
                        <LinkedIn/>
                        <Fb/>
                    </div>
                </div>

                <p className='w-3/4 text-[#71717A]'>
                    Cobalt is a trademark or registered trademark of Cobalt Financial Technologies Inc. Any other trademarks are the property of their respective owners. Unless otherwise noted, use of third party logos does not imply endorsement of, sponsorship of, or affiliation with Cobalt.
                </p>
                <p className='w-3/4 text-[#71717A]'>
                    Cobalt is a financial technology company, not a bank. Banking services are provided by Celtic Bank and Evolve Bank & Trust®, Members FDIC.
                </p>
            </div>
        </div>
    );
}

export default Footer;