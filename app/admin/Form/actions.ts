'use server';
import dbConnect from "@/lib/database";
import Post from "@/backend/models/Post";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

interface Image {
    src: string,
    alt: string,
    caption: string
}

interface PostData {
    title: string,
    subhead: string,
    body: string,
    featuredImage: Image
}

const addPost = async (data: FormData) => {
    await dbConnect();

    const file = data.get('featuredImage') as File;
    let imageUrl = '';

    try {
        if(file && file.size > 0) {
            const blob = await put(file.name, file, {
                access: 'public'
            });
            imageUrl = blob.url;
        }
        

        const postData: PostData = {
            title: data.get('title') as string || '',
            subhead: data.get('subhead') as string || '',
            body: data.get('body') as string || '',
            featuredImage: {
                src: imageUrl,
                alt: data.get('alt') as string || '',
                caption: data.get('caption') as string || '',
            }
        };

        const post = await Post.create(postData);
        revalidatePath('/');
        
        console.log('Successfully uploaded post: ', post);
    } catch (error) {
        console.error('Upload error: ', error);
    }
}

export default addPost;