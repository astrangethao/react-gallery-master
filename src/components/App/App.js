import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    galleryList: [],
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
    this.getList();
  }

  getList() {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((responseDB) => {
        console.log(responseDB.data);
        this.setState(
          {
            galleryList: [...responseDB.data],
          },
          () => {
            console.log("New List:", this.state.galleryList);
          }
        );
      })
      .catch((error) => {
        console.warn(`There was an error getting List`, error);
      });
  }

  handleLikes(event) {
    const imageId = event.target.id;

    console.log(imageId);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList
          galleryList={this.state.galleryList}
          handleLikes={this.handleLikes}
        />
      </div>
    );
  }
}

export default App;
