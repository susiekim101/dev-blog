import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/database';
import Admin from '@/backend/models/Admin';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Admin Login',
            credentials: {
                email: { label: 'Email', type: 'email'},
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
                await dbConnect();

                const admin = await Admin.findOne({ email: credentials?.email});
                if(!admin) throw new Error(`No Admin found with email ${credentials?.email}`);

                const isValid = await bcrypt.compare(credentials!.password, admin.password);
                if(!isValid) throw new Error(`Invalid password`);

                return { id: admin._id.toString(), name: admin.name, email: admin.email };
            }
        })
    ],
    session: { strategy: 'jwt' },
    pages: { signIn: '/admin'},
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };