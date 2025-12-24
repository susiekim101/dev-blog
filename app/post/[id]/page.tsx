import PostContainer from "../PostContainer/PostContainer";
import Header from "../../Blog/Header/Header";

import Footer from "../../Blog/Footer/Footer";
const PostPage = async ({ params }: { params: Promise<{id: string}> }) => {
    const { id } = await params;

    return (
        <div className="flex flex-col my-[1rem] mx-[5rem] gap-[1rem]">
            <Header/>
            <PostContainer id={id}/>
            <Footer/>
        </div>
    )
};

export default PostPage;