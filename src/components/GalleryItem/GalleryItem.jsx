import { useState } from "react";

function GalleryItem(props) {
    // const [name, setName]=useState(null);
    const [imageDisplay, setImageDisplay] = useState(true);
    const [likes, setLikes] = useState(0);

    const galleryLikes = () => {
        setLikes(likes + 1);
        props.galleryItemlikes(likes);

    }

    const changeImageDisplay = () => {
        setImageDisplay(!imageDisplay);
        console.log(imageDisplay);
    }

    return (
        <div>
            <h1> Gallery Item: {props.galleryItem.id}</h1>
            <p>props: {JSON.stringify(props)}</p>
            { imageDisplay ?
                <img onClick={changeImageDisplay} src={props.galleryItem.path} /> :
                <p onClick={changeImageDisplay} > {props.galleryItem.description}</p>}
            <p onClick={galleryLikes}>likes: {likes}</p>
        </div>
    )


}

export default GalleryItem;