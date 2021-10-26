import { useState } from "react";

function GalleryItem(props) {
    // const [name, setName]=useState(null);
    return (
        <div>
            <h1>GalleryItem</h1>
            {/* <p>props: {JSON.stringify(props)}</p> */}
            <img src={props.galleryItem.path} alt={props.galleryItem.description} />
        </div>
    )


}

export default GalleryItem;