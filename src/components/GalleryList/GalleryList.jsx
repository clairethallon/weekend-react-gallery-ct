import { useState } from "react";
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    // const [name, setName]=useState(null);

    return (
        <div>
            <h1>Gallery List</h1>
            <p>props: {JSON.stringify(props)}</p>
            <p>testing5</p>
            <GalleryItem />
        </div>
    )


}

export default GalleryList;