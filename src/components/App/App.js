import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    galleryItems: [],
    galleryItem: {
      id: "",
      title: "",
      description: "",
      path: "",
      likes: 0,
    },
  };

  componentDidMount() {
    console.log("Component App did Mount");
    this.getItems();
  }

  getItems() {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((responseDB) => {
        console.log(responseDB.data);
        this.setState(
          {
            galleryItems: [...responseDB.data],
          },
          () => {
            console.log("New List:", this.state.galleryItems);
          }
        );
      })
      .catch((error) => {
        console.warn(`There was an error getting Items`, error);
      });
  }

  putLikes(id) {
    axios({
      method: "PUT",
      url: `/like/${id}`,
      data: "",
    })
      .then((responseDB) => {
        console.log(responseDB.data);
        this.getItems();
      })
      .catch((error) => {
        console.warn(`There was an error updating likes`, error);
      });
  }

  handleLikes(event) {
    const imageId = event.target.id;
    console.log(imageId);
    this.putLikes(imageId);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList
          galleryItems={this.state.galleryItems}
          handleLikes={this.handleLikes}
        />
      </div>
    );
  }
}

export default App;
