import React from "react";

const Photo = ({ id, server_id, secret }) => {
  return (
    <div>
      <li className="photo-wrap">
        <img
          src={`https://live.staticflickr.com/${server_id}/${id}_${secret}.jpg`}
          alt="/"
        />
      </li>
    </div>
  );
};

export default Photo;
