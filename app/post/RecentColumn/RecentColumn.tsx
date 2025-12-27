'use client';
import fetchRecentPosts from "@/app/Blog/Recent/actions"
import PostCard from "@/app/Blog/Recent/PostCard";
import { useEffect, useState } from "react";
import type { PostData } from "@/app/admin/Form/actions";

const RecentColumn = () => {
    const [ recent, setRecent ] = useState<PostData[]>([]);

    useEffect(() => {
        const fetchRecent = async () => {
            const data = await fetchRecentPosts(3);
            setRecent(data);
        };
        fetchRecent();
    }, []);

    return (
        <div className='w-full'>
            <h1 className='text-lg font-bold mb-5'>Recent blog posts</h1>
            <div className='flex flex-col gap-5'>
                {
                    recent.map((post) => (
                        <PostCard key={post._id} layout='vertical' post={post}/>
                    ))
                }
            </div>
        </div>
    );
}

export default RecentColumn;