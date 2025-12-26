import Header from "../Blog/Header/Header";
import Footer from "../Blog/Footer/Footer";
import AllPosts from "../Blog/AllPosts/AllPosts";

const AllBlogPage = () => {

    return (
        <div className="flex flex-col my-[1rem] mx-[1rem] md:mx-[5rem] gap-[1rem]">
            <Header/>
            <AllPosts/>
            <Footer/>
        </div>
    );
}

export default AllBlogPage;