'use server';
import dbConnect from "@/lib/database";
import Post from "@/backend/models/Post";
import type { PostData } from "@/app/admin/Form/actions";
import type { ObjectId } from "mongoose";
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

export default fetchPostById;