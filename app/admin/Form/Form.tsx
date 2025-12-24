import addPost from "./actions";
import { useState } from "react";
const Form = () => {
    const [ alertStatus, setAlertStatus ] = useState('');

    const handleAddPost = async (formData: FormData) => {
        const result = await addPost(formData);
        setAlertStatus('');

        if(result.success) {
            setAlertStatus('Success');
        } else {
            setAlertStatus('Failure');
        }
    }

    return (
        <form action={handleAddPost}>
            {alertStatus == 'Success' && (
                <div role="alert" className="alert alert-success alert-soft border flex flex-row justify-between mb-2 border border-green-200">
                    <span>Post was successfully saved :{')'}</span>
                    <button className='cursor-pointer' onClick={() => setAlertStatus('')}>Close</button>
                </div>
            )}

            {alertStatus == 'Failure' && (
                <div role="alert" className="alert alert-error alert-soft border flex flex-row justify-between mb-2 border border-red-200">
                    <span>Error! Please try again :{'('}</span>
                    <button className='cursor-pointer' onClick={() => setAlertStatus('')}>Close</button>
                </div>
            )}

            <h1 className="text-2xl font-bold">Create new post</h1>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Title</legend>
                <textarea name="title" className="h-10 w-full rounded-sm p-2 font-lg border border-base-300" placeholder="Title" required></textarea>
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">Subhead</legend>
                <textarea name="subhead" className="h-10 w-full rounded-sm p-2 font-lg border border-base-300" placeholder="Subhead" required></textarea>
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Body</legend>
                <textarea name="body" className="h-24 w-full rounded-sm p-2 font-lg border border-base-300" placeholder="Body" required></textarea>
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Tags</legend>
                <textarea name="tags" className="h-24 w-full rounded-sm p-2 font-lg border border-base-300" placeholder="Separate tags with a comma (,)" required></textarea>
            </fieldset>

            <p className='text-xs font-semibold'>Featured Image</p>

            <input name='featuredImage' type="file" accept='image/*' className="file-input file-input-ghost my-3" required/>

            <fieldset className='fieldset'>
                <legend className='fieldset-legend'>alt</legend>
                <textarea name='alt' className='h-10 w-full rounded-sm p-2 font-lg border border-base-300' placeholder='Image alt' required/>                
            </fieldset>

            <fieldset className='fieldset'>
                <legend className='fieldset-legend'>caption</legend>
                <textarea name='caption' className='h-10 w-full rounded-sm p-2 font-lg border border-base-300' placeholder='Image caption' required/>                
            </fieldset>

            <button type="submit" className="btn w-full">Publish Post</button>
        </form>
    );
}
export default Form;