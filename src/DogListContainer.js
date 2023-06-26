// DO NOT DELETE
import React from "react";
import { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("akita");
  const [dogImgList, setDogImgList] = useState([""]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((res) => {
      const list = res.message
      const breedsNames = Object.keys(list) 
      setBreeds(breedsNames)
    })
  }, [])

  const dogList = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/3`);
      const data = await response.json();
    
      if(response.ok) {
        setDogImgList(data.message);
      } else {
        console.error("Error fetching dog images:", data.message);
      }
    } catch (error) {
      console.error("Error fetching dog images:", error);
    }
  };  

  return (
    <>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />
      <button type="button" className="display-button" onClick={dogList}>表示</button>
      <ul>
        {dogImgList.map((dogImageList, index) => {
          <li key={index}>
            <img src={dogImageList} alt={`dog ${index}`} onError={(e) => {
              e.target.onerror = null;
              e.target.src = "placeholder.png"; // 代替の画像パスを指定してください
            }} />
          </li>
        })}
      </ul>
    </>
  )
};

export default DogListContainer;