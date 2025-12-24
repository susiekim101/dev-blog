'use client';
import PostCard from "./PostCard";
import { useState, useEffect } from "react";
import fetchRecentPosts from "./actions";
import type { PostData } from "@/app/admin/Form/actions";

const Recent = () => {
    const [ recentPosts, setRecentPosts ] = useState<PostData[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchRecentPosts();
            setRecentPosts(data);
        };
        getPosts();
    }, []);

    return (
        <section className='w-full my-5'>
            <h1 className='text-xl font-bold mb-5'>Recent blog posts</h1>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className=''>
                    <PostCard layout='vertical' post={recentPosts[0]}/>
                </div>

                <div className='flex flex-col gap-5'>
                    <PostCard layout='horizontal' post={recentPosts[1]}/>
                    <PostCard layout='horizontal' post={recentPosts[2]}/>
                </div>
                
                <div className='lg:col-span-2'>
                    <PostCard layout='responsive' post={recentPosts[3]}/>
                </div>
            </div>


        </section>
    )
}

export default Recent;