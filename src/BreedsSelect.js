// DO NOT DELETE
import React from "react";

export const BreedsSelect = (Props) => {

  const handleChange = (e) => {
    Props.setSelectedBreed(e.target.value);
  }

  return (
    <>
      <select onChange={handleChange}>
        {Props.breeds.map((selectedBreed, index) => (
        <option key={index}>{selectedBreed}</option>
        ))}
      </select>
    </>
  )
}

export default BreedsSelect;