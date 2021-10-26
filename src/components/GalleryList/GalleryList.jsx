import { useState } from "react";
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    // const [name, setName]=useState(null);

    return (
        <div>
            <h1>Gallery List</h1>
            {/* <p>props: {JSON.stringify(props)}</p> */}
            <p>
                {
                    props.taco.map((taco) => (<GalleryItem galleryItem={taco} />))
                }
            </p>

        </div>
    )


}

export default GalleryList;