import ThemeToggle from "./ThemeToggle";
const Header = () => {
    return (
        <div className="flex flex-row justify-between">
            <h1 className="font-bold">{">"}_Hello Dev</h1>
            <div className="flex flex-row gap-[1rem]">
                <h1>Blog</h1>
                <h1>About</h1>
                <ThemeToggle/>
            </div>
            
        </div>
    );
}

export default Header;