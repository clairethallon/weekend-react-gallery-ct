import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList"
import axios from "axios";

function App() {
  // const [name, setName]=useState(null);
  const [items, setItems] = useState([]);
  const [likes, setLikes] = useState(2);

  useEffect(() => {
    console.log('loaded');
    getItems();
  }, []);

  const getItems = () => {
    axios.get('/gallery').then((response) => {
      console.log(response);
      setItems(response.data);
      setLikes(response.data.likes);
    }).catch((err) => {
      console.log(err);
    })
  }

  const updateLikes = (itemLikes) => {
    setLikes(itemLikes);
    console.log('updated likes', likes);
    // axios.put('/gallery').then((response) => {
    //   console.log(response);
    //   setLikes(response.data.likes);
    // }).catch((err) => {
    //   console.log(err);
    // })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <span class="imageBlocks" >
        <GalleryList taco={items} likes={itemFromGallery => { updateLikes(itemFromGallery) }} />
      </span>
    </div>
  );
}

export default App;
