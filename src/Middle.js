import React from "react";
import data from "./data";

const Middle = () => {
  return (
    <section className="middle">
      <h3 className="section-title">latest articles</h3>
      <div className="food-images">
        {data.map((item) => {
          const { id, title, image, info } = item;
          return (
            <article key={id} className="food-image-card">
              <div className="food-image">
                <img src={image} alt={title} />
              </div>
              <div className="food-image-info">
                <h4>{title}</h4>
                <p>{info}</p>
              </div>
              <button type="button" className="btn-readmore">
                Read more
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Middle;
