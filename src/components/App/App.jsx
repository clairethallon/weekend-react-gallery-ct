import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList"
import axios from "axios";

function App() {
  // const [name, setName]=useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('loaded');
    getItems();
  }, []);

  const getItems = () => {
    axios.get('/gallery').then((response) => {
      console.log('loaded', response);
      setItems(response.data);
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <span class="imageBlocks" >
        <GalleryList taco={items} get={getItems} />
      </span>
    </div>
  );
}

export default App;
