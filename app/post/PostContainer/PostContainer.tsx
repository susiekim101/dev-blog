import RecentColumn from "../RecentColumn/RecentColumn";
import ContentContainer from "./ContentContainer";

const PostContainer = ({id}: {id: string}) => {
    return (
        <div className='grid md:grid-cols-4 gap-5 my-5'>
            <div className='md:order-2 md:col-span-3 '>
                <ContentContainer id={id}/> 
            </div>

            <div className='md:order-1'>
                <RecentColumn/>
            </div>
        </div>
    );
}

export default PostContainer;