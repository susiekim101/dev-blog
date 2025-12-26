'use client';
import PostCard from "../Recent/PostCard";
import { useEffect, useState } from "react";
import fetchAllPosts from "./actions";
import type { PostData } from "@/app/admin/Form/actions";

const AllPosts = () => {
    const [ allPosts, setAllPosts ] = useState<PostData[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchAllPosts();
            setAllPosts(data);
        };
        getPosts();
    }, []);

    return (
        <section className='w-full'>
            <h1 className='text-xl font-bold mb-5 mt-7'>All blog posts</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {allPosts.map((post) => {
                    return <PostCard key={post._id} layout='vertical' post={post}/>
                })}
            </div>
        </section>
    );
}

export default AllPosts;