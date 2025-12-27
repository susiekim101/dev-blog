'use server';
import dbConnect from "@/lib/database";
import Post from "@/backend/models/Post";
import type { PostData } from "@/app/admin/Form/actions";
import { getServerSession } from "next-auth";

const fetchPostById = async (postId: string) => {
    await dbConnect();

    try {
        const post: PostData = await Post.findById(postId)
            .lean();
        console.log(`Successfully found post._id = ${postId}, `, post);
        return JSON.parse(JSON.stringify(post));
    } catch (error) {
        console.error(error);
    }
}

const checkIsAdmin = async () => {
    const session = await getServerSession();
    if(session)
        return true;
    else
        return false;
}

const updateContent = async (postId: string, data: FormData) => {
    await dbConnect();
    const tagsArray = (data.get('tags') as string).split(', ');
    
    try {
        const updatedPost = await Post.updateOne({ _id: postId }, {$set: { title: data.get('title'), body: data.get('body'), tags: tagsArray } })
        console.log('Successfully updated post: ', updatedPost );
        return JSON.parse(JSON.stringify(updatedPost));
    } catch (error) {
        console.error(error);
    }
}

export { fetchPostById, checkIsAdmin, updateContent };