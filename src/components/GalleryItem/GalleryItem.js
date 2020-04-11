import React, { Component } from "react";

class GalleryItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.item.path} />
        <br />
        <button onClick={this.props.updateItem(this.props.item.id)}>
          Love It!
        </button>
        <p>{this.props.item.likes} people love this!</p>
        <h2>{this.props.item.title}</h2>
        <p>
          <em>{this.props.item.description}</em>
        </p>
      </div>
    );
  }
}

export default GalleryItem;
