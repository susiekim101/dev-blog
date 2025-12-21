import Image from "next/image";
import dummy from "../../../public/dummy.jpg";
import { ArrowUpRight } from 'lucide-react';
import topicTagClass from "@/app/components/topic-tag";
const PostCard = ({ layout }: { layout: 'vertical' | 'horizontal' | 'responsive' }) => {
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

    return (
        <div className={`${containerClass} h-full`}>
            <figure className={`${imageClass} relative overflow-hidden`}>
                <Image
                    src={dummy}
                    alt="Banff"
                    className='object-cover'
                    fill/>
            </figure>

            <div className="flex flex-col flex-1 p-0 justify-start gap-5">
                <p className="text-purple-600 dark:text-purple-400 text-xs font-semibold">Dec 20, 2025</p>

                <div className="flex justify-between items-start group cursor-pointer">
                    <h2 className="text-xl font-bold">
                        Headline goes here
                    </h2>
                    <ArrowUpRight className="text-xl group-hover:scale-105 transition-transform"/>
                </div>

                <p className='light:text-gray-500 dark:text-gray-300 line-clamp-2'>Subheadline goes here. How do you create compelling presentations that wow your colleagues so much</p>
            
                <div className='flex gap-2'>
                    <div className={`${topicTagClass('design')}`}>Design</div>
                    <div className={`${topicTagClass('research')}`}>Research</div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;