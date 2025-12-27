'use client';
import { useEffect, useState } from "react";
import { checkIsAdmin } from "../Content/action";
import Content from "../Content/Content";
import EditContent from "../Content/EditContent";

const ContentContainer = ( { id }: { id: string } ) => {
    const [ isAdmin, setIsAdmin ] = useState(false);
    const [ isEditing, setIsEditing ] = useState(false);

    useEffect(() => {
        const fetchIsAdmin = async () => {
            const data = await checkIsAdmin();
            setIsAdmin(data);
        }
        fetchIsAdmin();
    }, []);

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    }

    return (
        <div>
            { isAdmin ? <EditContent id={id} isEditing={isEditing} toggleEditing={toggleEditing}/> : <Content id={id}/>}
        </div>
    )
}

export default ContentContainer;