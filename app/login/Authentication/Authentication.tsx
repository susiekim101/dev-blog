'use client';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Authentication = () => {
    const router = useRouter();

    const handleLogin = async (data: FormData) => {
        const email = data.get('email');
        const password = data.get('password');

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if(result?.error) {
            alert('Login failed: ' + result.error);
        } else {
            router.push('/admin');
            router.refresh();
        }
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='font-bold text-center text-xl'>Admin Login</h2>
            <form action={handleLogin} className="fieldset rounded-box w-xs p-4">
                

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" required/>

                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" required/>

                <button type='submit' className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    );
}

export default Authentication;