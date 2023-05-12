import { useState } from "react";
import "./Meme.css";
import MemeData from "./MemeData";

export default function Meme() {
  function addMeme() {
    console.log("click");
  }
  return (
    <div className="memeGen">
      <nav className="nav">
        <h1>Meme Generator</h1>
        <p>React Course - Project</p>
      </nav>
      <div className="form">
        <input type="text" className="formBtn" placeholder="Top Text" />
        <input type="text" className="formBtn" placeholder="Bottom Text" />
        <button type="button" className="getMeme" onClick={addMeme}>
          Get a new meme Image
        </button>
      </div>
    </div>
  );
}
