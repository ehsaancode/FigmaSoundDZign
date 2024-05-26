import React, { useState } from "react";
import "./Topics.css";
import {
  computer,
  systemusic,
  Thumbnail,
  equipment,
  meter,
  micgirl,
  bgElement,
} from "../../assets";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(systemusic);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>

        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImage(systemusic)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImage(meter)}>Using Daw</li>
            <li onMouseEnter={() => setCurrentImage(micgirl)}>
              Vocal Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(equipment)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(computer)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImage(Thumbnail)}>mastering</li>
          </ul>
          <div className="topic-image">{<img src={currentImage} />}</div>
        </div>
        <img src={bgElement} className="bgElement" />
      </div>
    </section>
  );
};

export default Topics;
