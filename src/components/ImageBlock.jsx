import React from "react";

function ImageBlock(props) {
  return (
    <div>
      <img
        src={props.src}
        id={props.id}
        class="d-block mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width="700"
        height="500"
        loading="lazy"
      />
    </div>
  );
}

export default ImageBlock;
