import Link from "next/link";
const Footer = () => {

    return (
        <div className="flex flex-row gap-3 text-[0.5rem] md:text-xs">
            <p>© Susie Kim 2025</p>
            <a target='_blank' href='https://www.linkedin.com/in/susiekim101/'>LinkedIn</a>
            <a target='_blank' href='https://github.com/susiekim101/'>GitHub</a>
            <a target='_blank' href='mailto:kim.susie06@gmail.com'>Email</a>
            <Link href='/login'>Admin</Link>
        </div>
    )
};

export default Footer;