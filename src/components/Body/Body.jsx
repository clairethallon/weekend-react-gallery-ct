import { useState } from "react";

function Body(props) {
    // const [name, setName]=useState(null);
    return (
        <div>
            <h1>Body</h1>
            <p>props: {JSON.stringify(props)}</p>
        </div>
    )


}

export default Body;