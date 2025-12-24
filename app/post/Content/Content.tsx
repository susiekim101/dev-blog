'use client';
import { useEffect, useState } from "react";
import fetchPostById from "./action";
import type { PostData } from "@/app/admin/Form/actions";
import Image from "next/image";
import topicTagClass from "@/app/components/topic-tag";

const Content = ({ id }: { id: string }) => {
    const [ post, setPost ] = useState<PostData>();
    const [ formattedDate, setFormattedDate ] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const data = await fetchPostById(id);
            setPost(data);
            const dateObj = new Date(data.createdAt);
            const date = dateObj.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            });
            setFormattedDate(date);
        }
        fetchPost();
    }, [id]);

    console.log(post);
    if(!post) return null;

    return (
        <div className='col-span-3 flex flex-col gap-3'>
                <p className="text-purple-600 dark:text-purple-400 text-xs font-semibold mb-4">{formattedDate}</p>

                <h1 className="text-3xl font-bold">
                    {post.title}
                </h1>

                <figure className='w-full aspect-[21/11] relative overflow-hidden my-3'>
                    <Image
                        src={post.featuredImage.src}
                        alt={post.featuredImage.alt}
                        className='object-cover'
                        fill
                    />
                </figure>

                <div>
                    {post.body.split('\n').map((paragraph, idx) => (
                            <p key={idx} className='mb-4'>{paragraph}</p>
                    ))}
                </div>
                    
                <div className='flex gap-2 mt-2'>
                    {post.tags.map((tag, idx) => (
                        <div key={idx} className={`badge rounded-lg ${topicTagClass(tag) || 'bg-gray-100 text-gray-600'}`}>{tag}</div>
                    ))}
                </div>
        </div>
    );
}
export default Content;