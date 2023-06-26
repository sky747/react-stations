// DO NOT DELETE
import React from "react";
import { useState } from "react";
import DogImage from "./DogImage";
import './App.css'

 export const Description = () => {
  const [url, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-sussex/n02102480_1525.jpg');

  const callApi = () => { 
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(res => setDogUrl(res.message)) 
  }

  return (
    <>
      <div className='Dog-main'>
        <p>Dogのimageです。</p>
        <DogImage url={url} />
      </div>
      <button className='button' onClick={callApi}>更新</button>
    </>
  )
}

export default Description;