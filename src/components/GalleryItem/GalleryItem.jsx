import { useState } from "react";

function GalleryItem(props) {
    // const [name, setName]=useState(null);
    return (
        <div>
            <h1>GalleryItem {props.galleryItem.id}</h1>
            {/* <p>props: {JSON.stringify(props)}</p> */}
            <img src={props.galleryItem.path} alt={props.galleryItem.description} />
            <p>likes: </p>
        </div>
    )


}

export default GalleryItem;