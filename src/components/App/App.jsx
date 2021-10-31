import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList"
import Form from "../Form/Form"
import axios from "axios";

function App() {
  // const [name, setName]=useState(null);
  const [items, setItems] = useState([]);

  // On load, call function to get items from the Server
  useEffect(() => {
    console.log('loaded');
    getItems();
  }, []); // will run forever unless you put this empty array in

  const getItems = () => {
    // get all via axios to /gallery route
    axios.get('/gallery').then((response) => {
      console.log('loaded', response);
      setItems(response.data); // set the response data to items via SetItems function
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <div>
        {/* pass down items and getitems function via props */}
        <Form get={getItems} />
        <GalleryList taco={items} get={getItems} />
      </div>
    </div>
  );
}

export default App;
