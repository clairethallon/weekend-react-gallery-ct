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

    // const deleteItem = () => {
    //     if (confirm('do you want to delete?')) {

    //         axios.delete(`/gallery/delete/${imageItem.id}`, imageItem).then((response) => {
    //             console.log('deleted');
    //             props.getItems();
    //         }).catch((err) => {
    //             console.log(err);
    //         })
    //     }
    //     else {
    //         alert('not deleted');
    //     }
    // }

    // function to toggle the image item display
    const changeImageDisplay = () => {
        setImageDisplay(!imageDisplay); // when clicked, toggle boolean to whatever imageDisplay is not
        console.log(imageDisplay);
    }

    return (
        <div>
            {/* <p>props: {JSON.stringify(props)}</p> */}

            {/* if ImageDispay = true, display image, if false, display alt text */}
            {imageDisplay ?
                <img onClick={changeImageDisplay} src={imageItem.path} /> :
                <p onClick={changeImageDisplay} > {imageItem.description}</p>}
            <span>
                {/* if the like button is clicked, run galleryLikes */}
                <p onClick={galleryLikes}>{imageItem.likes}  &#9825; </p>
                {/* <button onClick={deleteItem}>delete</button> */}
            </span>

        </div >
    )


}

export default GalleryItem;