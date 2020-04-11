import React, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
  render() {
    return (
      <div>
        <br />
        {this.props.item.isClicked ? (
          <img
            src={this.props.item.path}
            onClick={this.props.toggleImage(this.props.item.id)}
          />
        ) : (
          <div onClick={this.props.toggleImage(this.props.item.id)}>
            <h2>{this.props.item.title}</h2>
            <p>
              <em>{this.props.item.description}</em>
            </p>
          </div>
        )}
        <div>
          <button
            className="heart"
            onClick={this.props.updateItem(this.props.item.id)}
          >
            ❤️
          </button>
        </div>
        <p>{this.props.item.likes} people love this!</p>
      </div>
    );
  }
}

export default GalleryItem;
