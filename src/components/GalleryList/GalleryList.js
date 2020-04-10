import React, { Component } from "react";

class GalleryList extends Component {
  render() {
    return (
      <div className="container">
        {this.props.galleryItems.map((gallery, index) => (
          <div key={index}>
            <img src={gallery.path} />
            <br />
            <h2>{gallery.title}</h2>
            <p>
              <em>{gallery.description}</em>
            </p>
            <button onClick={this.props.handleLikes} id={gallery.id}>
              Love It!
            </button>
            <p>{gallery.likes} people love this!</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GalleryList;
