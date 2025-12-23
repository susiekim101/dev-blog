import Authentication from "./Authentication/Authentication";
import Header from "../Blog/Header/Header";
import Footer from "../Blog/Footer/Footer";

export default function AdminPage() {
  return (
    <div className="flex flex-col my-[1rem] mx-[5rem] gap-[1rem]">
        <Header/>
        <Authentication/>
        <Footer/>
    </div>
  );
}
