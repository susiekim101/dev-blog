import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const DesktopHeader = () => {

    return (
        <div className="w-full flex flex-row justify-between">
            <Link href='/' className="font-bold">{">"}_Hello Dev</Link>
            <div className="flex flex-row gap-[1rem]">
                <Link href='/all'>Blog</Link>
                <Link href='/about'>About</Link>
                <ThemeToggle/>
            </div>
            
        </div>   
    );
}

export default DesktopHeader;