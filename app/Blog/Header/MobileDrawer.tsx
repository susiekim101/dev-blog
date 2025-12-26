import { X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
const MobileDrawer = ( { isOpen, toggleIsOpen }: { isOpen: boolean, toggleIsOpen: () => void}) => {

    return (
        <div className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white transition-transform duration-300 transform dark:bg-black ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col justify-center items-center gap-8 text-2xl">
                <Link href='/' className="text-2xl m-5 font-bold">{">"}_Hello Dev</Link>
                <Link href='/all' className="">Blog</Link>
                <Link href='/about'>About</Link>
                <ThemeToggle/>
            </div>

            <X onClick={toggleIsOpen} className={"fixed bottom-10 h-7 w-7"}></X>
        </div>
    );
}

export default MobileDrawer;