import { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList"
import axios from "axios";

function Body(props) {
    // const [name, setName]=useState(null);

    useEffect(() => {
        console.log('loaded');
        axios.get('/gallery').then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    });

    const [images, setImages] = useState([
        { id: 1, path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 },
        { id: 2, path: 'images/aardvark.jpg', description: 'Photo of an aardvark.', likes: 0 },
        { id: 3, path: 'images/hedgehog.jpg', description: 'Photo of a small hedgehog.', likes: 0 },
        { id: 4, path: 'images/lamb.jpg', description: 'Photo of a lamb in grass.', likes: 0 }
    ]);
    return (
        <div>
            <h1>Body</h1>
            <GalleryList taco={images} />
        </div>
    )


}

export default Body;