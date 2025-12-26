import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';
import topicTagClass from "@/app/components/topic-tag";
import type { PostData } from "@/app/admin/Form/actions";
import Link from "next/link";
interface PostCardProps {
    layout: 'vertical' | 'horizontal' | 'responsive',
    post: PostData
}

const PostCard = ({ layout, post }: PostCardProps) => {
    if(!post) return null;
    const containerClass = {
        vertical: 'flex flex-col gap-2',
        horizontal: 'flex flex-col md:flex-row gap-2',
        responsive: 'flex flex-col lg:flex-row gap-2'
    }[layout];

    const imageClass = {
        vertical: 'w-full aspect-[16/9]',
        horizontal: 'w-full md:w-2/5 aspect-[16/10]',
        responsive: 'w-full lg:w-1/2 aspect-[16/9] lg:aspect-[21/9]' 
    }[layout];

    const dateObj = new Date(post.createdAt);

    const formattedDate = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <Link href={`/post/${post._id}`} className={`${containerClass} h-fit hover:scale-102 transition-transform`}>
            <figure className={`${imageClass} relative overflow-hidden`}>
                <Image
                    src={post.featuredImage.src}
                    alt="Banff"
                    className='object-cover'
                    fill/>
            </figure>

            <div className="flex flex-col flex-1 p-0 justify-start">
                <p className="text-purple-600 dark:text-purple-400 text-xs font-semibold">{formattedDate}</p>

                <div className="flex justify-between items-start group cursor-pointer my-3">
                    <h2 className="text-xl font-bold">
                        {post.title}
                    </h2>
                    <ArrowUpRight className="text-xl group-hover:scale-105 transition-transform"/>
                </div>

                <p className='text-gray-500 dark:text-gray-200 line-clamp-2'>{post.body}</p>
            
                <div className='flex gap-2 mt-2'>
                    {post.tags.map((tag, idx) => (
                        <div key={idx} className={`badge rounded-lg ${topicTagClass(tag) || 'bg-gray-100 text-gray-600'}`}>{tag}</div>
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default PostCard;