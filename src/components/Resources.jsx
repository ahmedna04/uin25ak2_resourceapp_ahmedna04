import { useState } from "react";
import resources from "../data/ressurser.js";

const Resources = () => {
  const [category, setCategory] = useState("react");

  return (
    <div>
      <h2>Ressurser</h2>
      <div>
        <button onClick={() => setCategory("react")}>React</button>
        <button onClick={() => setCategory("html")}>HTML</button>
        <button onClick={() => setCategory("css")}>CSS</button>
        <button onClick={() => setCategory("javascript")}>JavaScript</button>
      </div>
      <ul>
        {resources
          .filter((res) => res.category === category)
          .map((res, index) => (
            <li key={index}>
              <a href={res.url} target="_blank" rel="noopener noreferrer">{res.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Resources;
