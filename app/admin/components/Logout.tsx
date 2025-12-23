'use client';
import { signOut } from 'next-auth/react';

const Logout = () => {
    return (
        <div className='text-xs'>
            <button onClick={() => signOut({ callbackUrl: '/'})} className='cursor-pointer'>Log out</button>
        </div>
    );
}

export default Logout;