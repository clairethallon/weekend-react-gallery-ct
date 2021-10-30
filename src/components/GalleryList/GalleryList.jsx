import { useState } from "react";
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    // const [name, setName]=useState(null);

    return (
        <div>
            {/* <p>props: {JSON.stringify(props)}</p> */}
            <p>
                {
                    // map through items and send them + getItems function via props
                    props.taco.map((taco) =>
                        (<GalleryItem galleryItem={taco} getItems={props.get} />))
                }
            </p>

        </div>
    )


}

export default GalleryList;