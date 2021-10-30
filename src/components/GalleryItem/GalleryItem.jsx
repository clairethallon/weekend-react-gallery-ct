import { useState } from "react";

function GalleryItem(props) {
    // const [name, setName]=useState(null);
    const [imageDisplay, setImageDisplay] = useState(true);
    const [imageItem, setImageItem] = useState({
        id: props.galleryItem.id,
        path: props.galleryItem.path,
        description: props.galleryItem.description,
        likes: props.galleryItem.likes
    });


    const galleryLikes = () => {
        setImageItem(
            { ...imageItem, likes: ++imageItem.likes }
        )
        console.log(imageItem.likes);

    }

    const changeImageDisplay = () => {
        setImageDisplay(!imageDisplay);
        console.log(imageDisplay);
    }

    return (
        <div>
            <h1> Gallery Item: {props.galleryItem.id}</h1>
            {/* <p>props: {JSON.stringify(props)}</p> */}
            {imageDisplay ?
                <img onClick={changeImageDisplay} src={imageItem.path} /> :
                <p onClick={changeImageDisplay} > {imageItem.description}</p>}
            <p onClick={galleryLikes}>likes: {imageItem.likes}</p>

        </div >
    )


}

export default GalleryItem;