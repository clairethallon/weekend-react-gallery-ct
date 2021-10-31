import { useState } from "react";
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    // const [name, setName]=useState(null);

    return (
        <div >
            {/* <p>props: {JSON.stringify(props)}</p> */}

            {
                // map through items and send them + getItems function via props
                props.taco.map((item) =>
                    (<GalleryItem galleryItem={item} getItems={props.get} />))
            }


        </div>
    )


}

export default GalleryList;