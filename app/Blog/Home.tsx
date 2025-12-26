import Header from "./Header/Header";
import Title from "./Header/Title";
import Recent from "./Recent/Recent";
import AllPosts from "./AllPosts/AllPosts";
import Footer from "./Footer/Footer";
const Blog = () => {

    return (
        <div className="flex flex-col gap-[1rem]">
            <Header/>
            <Title/>
            <Recent/>
            <AllPosts/>
            <Footer/>
        </div>
    );
}

export default Blog;