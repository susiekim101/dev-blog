'use cilent'

import addPost from "./actions";
const Form = () => {

    return (
        <form action={addPost}>
            <h1 className="text-2xl font-bold">Create new post</h1>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Title</legend>
                <textarea name="title" className="textarea h-24 w-full border-base-300" placeholder="Title" required></textarea>
            </fieldset>

            <fieldset className="fieldset">
            <legend className="fieldset-legend">Subhead</legend>
                <textarea name="subhead" className="textarea h-24 w-full border-base-300" placeholder="Subhead" required></textarea>
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Body</legend>
                <textarea name="body" className="textarea h-24 w-full border-base-300" placeholder="Body" required></textarea>
            </fieldset>

            <button type="submit" className="btn w-full">Publish Post</button>
        </form>
    );
}
export default Form;