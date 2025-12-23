import Admin from "../admin/Admin";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession();
  if(!session) {
      redirect('/login');
  }

  return (
    <div>
        <Admin/>
    </div>
  );
}
