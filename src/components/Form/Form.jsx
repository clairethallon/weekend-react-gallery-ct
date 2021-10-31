import { useState } from "react";
import axios from "axios";

function Form(props) {
    // const [name, setName]=useState(null);
    const [newImage, setNewImage] = useState({
        path: '',
        description: '',
        likes: 0
    });

    const handlePathChange = (event) => {
        setNewImage(
            { ...newImage, path: event.target.value }
        )
        console.log(newImage.path);
    }

    const handleDescriptionChange = (event) => {
        setNewImage(
            { ...newImage, description: event.target.value }
        )
        console.log(newImage.description);
    }
    const handleSubmit = () => {
        console.log(newImage);
        axios.post(`/gallery`, newImage).then((response) => {
            console.log(response);
            props.getItems();
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <h1>Form</h1>
            <span Class="input-group-text" id="addon-wrapping">
                <input type="text" placeholder="image URL" onChange={(event) => handlePathChange(event)} />
                <input type="text" placeholder="alt-text" onChange={(event) => handleDescriptionChange(event)} />
                <button onClick={handleSubmit}>Submit Image</button>
            </span>
            <br />
            {/* <p>props: {JSON.stringify(props)}</p> */}
        </div >
    )


}

export default Form;