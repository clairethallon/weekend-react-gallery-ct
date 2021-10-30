import { useState } from "react";
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    // const [name, setName]=useState(null);

    return (
        <div>
            {/* <p>props: {JSON.stringify(props)}</p> */}
            <p>
                {
                    props.taco.map((taco) =>
                        (<GalleryItem galleryItem={taco} galleryItemlikes={itemFromGallery => { props.likes(itemFromGallery) }} />))
                }
            </p>

        </div>
    )


}

export default GalleryList;