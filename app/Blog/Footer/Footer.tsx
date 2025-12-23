import Link from "next/link";
const Footer = () => {

    return (
        <div className="flex flex-row gap-3 text-xs">
            <p>© Susie Kim 2025</p>
            <p>LinkedIn</p>
            <p>GitHub</p>
            <p>Email</p>
            <Link href='/login'>Admin</Link>
        </div>
    )
};

export default Footer;