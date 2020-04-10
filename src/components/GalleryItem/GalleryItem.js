import React, { Component } from "react";

class GalleryItem extends Component {
  render() {
    return (
      <div>
        <h2>{gallery.title}</h2>
        <p>
          <em>{gallery.description}</em>
        </p>
      </div>
    );
  }
}

export default GalleryItem;
