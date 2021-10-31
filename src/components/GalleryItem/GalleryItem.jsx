import { useState } from "react";
import axios from "axios";

function GalleryItem(props) {
    // const [name, setName]=useState(null);

    const [imageDisplay, setImageDisplay] = useState(true); // for toggle between image/alt text

    const galleryLikes = () => {

        //update server Gallery using the updated likes
        axios.put(`/gallery/like/${props.galleryItem.id}`, props.galleryItem).then((response) => {
            console.log(response);
            props.getItems();
        }).catch((err) => {
            console.log(err);
        })

    }

    // function to toggle the image item display
    const changeImageDisplay = () => {
        setImageDisplay(!imageDisplay); // when clicked, toggle boolean to whatever imageDisplay is not
        console.log(imageDisplay);
    }

    const deleteItem = () => {
        console.log('in deleteItem');
        axios.delete(`/gallery/delete/${props.galleryItem.id}`, props.galleryItem).then((response) => {
            console.log(response);
            props.getItems();
        }).catch((err) => {
            console.log(err);
        })

    }


    return (
        <div >
            {/* <p>props: {JSON.stringify(props)}</p> */}

            {/* if ImageDispay = true, display image, if false, display alt text */}
            <div>
                {imageDisplay ?

                    <img class=" img-fluid rounded " onClick={changeImageDisplay} src={props.galleryItem.path} /> :
                    <p onClick={changeImageDisplay} > {props.galleryItem.description}</p>}

                {/* if the like button is clicked, run galleryLikes */}
                <div>

                    <button class="btn btn-light float-left" onClick={galleryLikes}>{props.galleryItem.likes}  &#9825;</button>
                    <i class="fa fa-trash-o text-right" onClick={deleteItem}></i>

                </div>
                <br />
            </div>

        </div >
    )


}

export default GalleryItem;