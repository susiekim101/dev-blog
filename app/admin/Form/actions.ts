'use server';
import dbConnect from "@/lib/database";
import Post from "@/backend/models/Post";

interface PostData {
    title: string,
    subhead: string,
    body: string
}


const addPost = async (data: FormData) => {
        'use server';

        await dbConnect();
        const postData: PostData = {
            title: data.get('title') as string || '',
            subhead: data.get('subhead') as string || '',
            body: data.get('body') as string || ''
        };

        try {
            const newPost = await Post.create(postData);
            console.log('Created new post: ', newPost);
        } catch (error) {
            console.error('Failed to create new post: ', error);
        }
    }

    export default addPost;