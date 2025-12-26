import Authentication from "./Authentication/Authentication";
import Header from "../Blog/Header/Header";
import Footer from "../Blog/Footer/Footer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession();
  if(session) {
    redirect('/admin');
  }
  
  return (
    <div className="flex flex-col gap-[1rem]">
        <Header/>
        <Authentication/>
        <Footer/>
    </div>
  );
}
