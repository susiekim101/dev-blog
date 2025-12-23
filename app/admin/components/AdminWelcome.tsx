'use client';
import { CirclePlus } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import Form from "../Form/Form";

const AdminWelcome = () => {
    const {data: session} = useSession();
    const dialogRef = useRef<HTMLDialogElement>(null);

    const name = session?.user?.name;

    const handleOpen = () => {
        dialogRef.current?.showModal();
    }

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl font-bold'>Welcome, {name}!</h1>
            <p>Create new blog posts here so they can be uploaded on the blog page :D</p>
            <div onClick={handleOpen} 
                className='btn w-fit flex flex-row gap-2 justify-center items-center transition-transform'
            >
                <CirclePlus className='w-5 h-5'/>
                Create
            </div>

            <dialog ref={dialogRef} className='modal'>
                <div className='modal-box w-11/12 max-w-5xl'>
                    <Form/>
                    <div className='modal-action text-center m-1'>
                        <form method='dialog' className='w-full'>
                            <button className="w-full text-xs cursor-pointer">Cancel</button>
                        </form>
                    </div>
                </div>

                <form method='dialog' className='modal-backdrop'>
                    <button></button>
                </form>
            </dialog>
        </div>
    );
}

export default AdminWelcome;