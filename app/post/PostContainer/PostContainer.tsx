import RecentColumn from "../RecentColumn/RecentColumn";
import Content from "../Content/Content";

const PostContainer = ({id}: {id: string}) => {

    return (
        <div className='grid md:grid-cols-4 gap-5 my-5'>
            <div className='md:order-2'>
                <Content id={id}/>
            </div>

            <div className='md:order-1'>
                <RecentColumn/>
            </div>


        </div>
    );
}

export default PostContainer;