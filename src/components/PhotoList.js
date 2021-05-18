import React from "react";
import Photo from "./Photo";

const PhotoList = (props) => {
  const result = props.data;

  let photos = result.map((photo) => (
    <Photo
      secret={photo.secret}
      server_id={photo.server}
      id={photo.id}
      key={photo.id}
      title={photo.title}
    />
  ));

  return (
    <div className="photo-container">
      <h2> Results </h2>
      <ul className="photo-list">{photos}</ul>
    </div>
  );
};

export default PhotoList;
