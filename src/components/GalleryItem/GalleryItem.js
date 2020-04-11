import React, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
  render() {
    const galleryImage = (
      <img
        src={this.props.item.path}
        onClick={this.props.toggleImage(this.props.item.id)}
      />
    );
    const galleryDescription = (
      <div
        className="sizing"
        onClick={this.props.toggleImage(this.props.item.id)}
      >
        <h2>{this.props.item.title}</h2>
        <p>
          <em>{this.props.item.description}</em>
        </p>
      </div>
    );
    return (
      <div>
        <br />
        {!this.props.item.isClicked ? galleryDescription : galleryImage}
        <div>
          <button
            className="heart"
            onClick={this.props.updateItem(this.props.item.id)}
          >
            <span role="img">❤️</span>
          </button>
        </div>
        {this.props.item.likes === 1 ? (
          <p>{this.props.item.likes} person love this!</p>
        ) : this.props.item.likes > 1 ? (
          <p>{this.props.item.likes} people love this!</p>
        ) : (
          <p>Be the first one to love this!</p>
        )}
      </div>
    );
  }
}

export default GalleryItem;
