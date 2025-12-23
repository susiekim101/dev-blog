import Header from "../Blog/Header/Header";
import Footer from "../Blog/Footer/Footer";
import AdminWelcome from "./components/AdminWelcome";
import Logout from "./components/Logout";

const Admin = () => {
    return (
        <div className="flex flex-col my-[1rem] mx-[5rem] gap-[1rem]">
            <Header/>
            <AdminWelcome/>
            <Logout/>
            <Footer/>
        </div>
    )
}

export default Admin;