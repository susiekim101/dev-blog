import PostCard from "./PostCard";

const Recent = () => {

    return (
        <section className='w-full my-5'>
            <h1 className='text-xl font-bold mb-5'>Recent blog posts</h1>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className=''>
                    <PostCard layout='vertical'/>
                </div>

                <div className='flex flex-col gap-5'>
                    <PostCard layout='horizontal'/>
                    <PostCard layout='horizontal'/>
                </div>
                
                <div className='lg:col-span-2'>
                    <PostCard layout='responsive'/>
                </div>
            </div>


        </section>
    )
}

export default Recent;