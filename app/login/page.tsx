import Authentication from "./Authentication/Authentication";
import Header from "../Blog/Header/Header";
import Footer from "../Blog/Footer/Footer";

export default function AdminPage() {
  return (
    <div>
        <Header/>
        <Authentication/>
        <Footer/>
    </div>
  );
}
