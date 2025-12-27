'use client';
import { fetchPostById, updateContent } from "./action";
import type { PostData } from "@/app/admin/Form/actions";
import { formatDate } from "./Content";
import Content from "./Content";
import { useEffect, useState } from "react";
import Image from "next/image";
import TextareaAutosize from 'react-textarea-autosize';
import { Edit, Check } from "lucide-react";

const EditContent = ( { id, isEditing, toggleEditing }: { id: string, isEditing: boolean, toggleEditing: () => void } ) => {
    const [ post, setPost ] = useState<PostData>();
    const [ formattedDate, setFormattedDate ] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const data = await fetchPostById(id);
            setPost(data);
            const dateData = formatDate(data.createdAt);
            setFormattedDate(dateData);
        }
        fetchPost();
    }, [id]);

    if(!post) return null;

    const bodyText = post.body.split('\n').filter((p) => p.trim()).join('\n\n');
    const tagString = post.tags.join(', ');

    const handleSavePost = async (data: FormData) => {
        console.log("Saving new post");
        await updateContent(id, data);

        setPost((prev) => {
            if(!prev) return prev;
            return {
                ...prev,
                title: data.get('title') as string,
                body: data.get('body') as string,
                tags: (data.get('tags') as string).split(', ')
            }
        })
        toggleEditing();
    }

    return (
        <div className='flex flex-col gap-3'> 
            { isEditing ? 
                (<>
                <form action={handleSavePost} key={isEditing ? 'editing' : 'viewing'}>
                    <button className='cursor-pointer flex flex-row justify-center items-center gap-3 border border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400 px-2 py-1 w-fit rounded-lg mb-5 text-sm'
                        type="submit">
                        <Check className='w-4 h-4 text-blue-500 dark:text-blue-400'/>
                        Save
                    </button>

                    <p className="text-purple-600 dark:text-purple-400 text-xs font-semibold mb-4">{formattedDate}</p>

                    
                        <textarea name="title" className="field-sizing-content border border-gray-300 p-2 rounded-md w-full resize-none text-3xl font-bold" defaultValue={post.title} required></textarea>

                        <div className='my-3'>
                            <figure className='w-full aspect-[21/11] relative overflow-hidden mb-1'>
                                <Image
                                    src={post.featuredImage.src}
                                    alt={post.featuredImage.alt}
                                    className='object-cover'
                                    fill
                                />
                            </figure>
                            <p className='text-right text-sm italic text-gray-500 dark:text-gray-200'>{post.featuredImage.caption}</p>
                        </div>

                        <TextareaAutosize name="body" className="textarea border border-gray-300 p-2 rounded-md w-full resize-none mb-4" defaultValue={bodyText} required></TextareaAutosize>
                        <input type="text" name="tags" className="field-sizing-content border border-gray-300 p-2 rounded-md w-full mt-2" defaultValue={tagString} required></input>
                    </form>
                </> ) : (<>
                    <div className='cursor-pointer flex flex-row justify-center items-center gap-3 border border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400 px-2 py-1 w-fit rounded-lg mb-5 text-sm'
                        onClick={ () => toggleEditing() }>
                        <Edit className='w-4 h-4 text-blue-500 dark:text-blue-400'/>
                        Edit
                    </div>
                    <Content id={id}/>
                </>)}
        </div>
    );
}

export default EditContent;