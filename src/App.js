import { useEffect, useState } from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import Content from './components/Content';

import radial from './img/radial-gr.png';
import Footer from './components/Footer';

function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      const moveCursor = (e) => {
        const x = e.clientX - 325
        const y = e.clientY - 325
        setCursorXY({ x, y })
      }

      window.addEventListener('mousemove', moveCursor)
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', moveCursor)
      };
    }, []);

    return (
        <div className="App">
            <div
            className="cursor"
            style={{
                transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
            }}
            />

            {windowWidth < 992 && 
                <div className='flex items-center justify-center px-10 bg-transparent backdrop-blur-lg w-full h-full fixed z-30'>
                    <div className='bg-white p-8 rounded-3xl text-[--bg-color] text-center'>
                        I regret to inform you, but the version for tablets and phones has not been made yet 
                    </div>
                </div>
            }

            <Nav/>
            <div className='px-20 relative'>
                <picture className='absolute z-[-1] left-1/2 -translate-x-1/2 w-full select-none'>
                    <img src={radial} alt='radial gradient' className='h-[calc(100dvh-var(--nav-height))] w-full'/>
                </picture>
                <Header/>
                <Content/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
