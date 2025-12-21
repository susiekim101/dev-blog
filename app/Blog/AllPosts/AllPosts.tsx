import PostCard from "../Recent/PostCard";

const AllPosts = () => {

    return (
        <section className='w-full'>
            <h1 className='text-xl font-bold mb-5'>All blog posts</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <PostCard layout='vertical'/>
                <PostCard layout='vertical'/>
                <PostCard layout='vertical'/>
                <PostCard layout='vertical'/>            
                <PostCard layout='vertical'/>
                <PostCard layout='vertical'/>            
                <PostCard layout='vertical'/>
                <PostCard layout='vertical'/>            
                <PostCard layout='vertical'/>
                <PostCard layout='vertical'/>
            </div>
        </section>
    );
}

export default AllPosts;