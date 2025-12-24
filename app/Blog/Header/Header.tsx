import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    return (
        <div className="flex flex-row justify-between">
            <Link href='/' className="font-bold">{">"}_Hello Dev</Link>
            <div className="flex flex-row gap-[1rem]">
                <Link href='/all'>Blog</Link>
                <h1>About</h1>
                <ThemeToggle/>
            </div>
            
        </div>
    );
}

export default Header;