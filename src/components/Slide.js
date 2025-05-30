import React from "react";

const Slide = ({ slide }) => {
  return (
    <div className="slide">
      <h1>{slide.title}</h1>

      <h2>{slide.subtitle}</h2>
      <p>{slide.content}</p>

      {slide.code && (
        <pre className="code-block">
          <code>{slide.code}</code>
        </pre>
      )}
    </div>
  );
};

export default Slide;
