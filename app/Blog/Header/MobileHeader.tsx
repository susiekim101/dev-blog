'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import MobileDrawer from './MobileDrawer';

const MobileHeader = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleIsOpen = () => {
        console.log("Clicked")
        setIsOpen(!isOpen);
    }

    return (
        <div className="w-full flex flex-row justify-between items-center mb-5">
            <Link href='/' className="font-bold">{">"}_Hello Dev</Link>
            
            <Menu className="w-5 h-5" onClick={toggleIsOpen}/>
            <MobileDrawer isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>

        </div>
    );
}

export default MobileHeader;