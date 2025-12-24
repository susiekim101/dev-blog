'use server';
import dbConnect from "@/lib/database";
import Post from "@/backend/models/Post";
import type { PostData } from "@/app/admin/Form/actions";

const fetchRecentPosts = async () => {
    await dbConnect();
    
    try {
        const allPosts: PostData[] = await Post.find()
            .sort({ createdAt: -1 })
            .limit(4)
            .lean();
        console.log('Succesfully fetched all posts.');
        return JSON.parse(JSON.stringify(allPosts));
    } catch (error) {
        console.error('Failed to fetch all posts, ', error);
        return [];
    }
}

export default fetchRecentPosts;