import PostCard from "./PostCard";

const Recent = () => {

    return (
        <div className="border border-black">
            <h1 className="font-bold">Recent blog posts</h1>
            <div className="flex flex-row">
                <PostCard/>
                <div className="flex flex-col">
                    <PostCard/>
                    <PostCard/>
                </div>
            </div>
        </div>
    )
}

export default Recent;