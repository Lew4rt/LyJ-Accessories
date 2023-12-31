import React from "react";
import { Link } from "react-router-dom";

export default function Item({ product }) {
  const fileExtension = product.imageSrc.split(".").pop();
  const isImage = ["jpg", "jpeg", "png", "gif"].includes(fileExtension);
  const isVideo = ["mp4", "webm"].includes(fileExtension);

  return (
    <Link to={`/product/${product.id}`}>
      <div className="card" data-aos="fade-up" data-aos-duration={600}>
        <div className="card_media">
          {isImage ? (
            <img src={product.imageSrc} alt={product.title} />
          ) : isVideo ? (
            <video autoPlay muted loop>
              <source src={product.imageSrc} type={`video/${fileExtension}`} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>Unsupported media type</p>
          )}
        </div>
        <div className="card_description">
          <h3>{product.title}</h3>
          <hr />
          <p className="card_description_text">{product.description}</p>
          <hr />
          <p className="card_price">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}
