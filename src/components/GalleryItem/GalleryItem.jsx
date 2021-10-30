import { useState } from "react";
import axios from "axios";

function GalleryItem(props) {
    // const [name, setName]=useState(null);

    const [imageDisplay, setImageDisplay] = useState(true);
    const [imageItem, setImageItem] = useState({
        id: props.galleryItem.id,
        path: props.galleryItem.path,
        description: props.galleryItem.description,
        likes: props.galleryItem.likes
    });

    const galleryLikes = () => {
        setImageItem(
            { ...imageItem, likes: ++imageItem.likes }
        )
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

    const changeImageDisplay = () => {
        setImageDisplay(!imageDisplay);
        console.log(imageDisplay);
    }

    return (
        <div>
            {/* <h1> Gallery Item: {props.galleryItem.id}</h1> */}
            {/* <p>props: {JSON.stringify(props)}</p> */}
            {imageDisplay ?
                <img onClick={changeImageDisplay} src={imageItem.path} /> :
                <p onClick={changeImageDisplay} > {imageItem.description}</p>}
            <span>
                <p onClick={galleryLikes}>{imageItem.likes}  &#9825; </p>
                {/* <button onClick={deleteItem}>delete</button> */}
            </span>

        </div >
    )


}

export default GalleryItem;