import RecentColumn from "../RecentColumn/RecentColumn";
import Content from "../Content/Content";
import type { ObjectId } from "mongoose";

const PostContainer = ({id}: {id: string}) => {

    return (
        <div className='grid grid-cols-4 gap-5 my-5'>
            <RecentColumn/>
            <Content id={id}/>
        </div>
    );
}

export default PostContainer;