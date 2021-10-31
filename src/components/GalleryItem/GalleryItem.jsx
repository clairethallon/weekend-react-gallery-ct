import { useState } from "react";
import axios from "axios";

function GalleryItem(props) {
    // const [name, setName]=useState(null);

    const [imageDisplay, setImageDisplay] = useState(true); // for toggle between image/alt text
    // create object for ImageItem --> set useState to props.galleryItem.ATTRIBUTE
    const [imageItem, setImageItem] = useState({
        id: props.galleryItem.id,
        path: props.galleryItem.path,
        description: props.galleryItem.description,
        likes: props.galleryItem.likes
    });

    const galleryLikes = () => {
        // update imageItem.likes object when like button is clicked
        setImageItem(
            { ...imageItem, likes: ++imageItem.likes }
        )
        //update server Gallery using the updated imageItem.likes
        axios.put(`/gallery/like/${imageItem.id}`, imageItem).then((response) => {
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
        axios.delete(`/gallery/delete/${imageItem.id}`, imageItem).then((response) => {
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

                    <img class=" img-fluid rounded " onClick={changeImageDisplay} src={imageItem.path} /> :
                    <p onClick={changeImageDisplay} > {imageItem.description}</p>}

                {/* if the like button is clicked, run galleryLikes */}
                <div>

                    <button class="btn btn-light float-left" onClick={galleryLikes}>{imageItem.likes}  &#9825;</button>
                    <i class="fa fa-trash-o text-right" onClick={deleteItem}></i>

                </div>
                <br />
            </div>

        </div >
    )


}

export default GalleryItem;