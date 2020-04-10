import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    galleryList: [],
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg" /> */}
        <div className="container">
          {this.state.galleryList.map((gallery, index) => (
            <div key={index}>
              <img src={gallery.path} />
              <button>Love It!</button>
              <h2>{gallery.title}</h2>
              <p>
                <em>{gallery.description}</em>
              </p>
              <p>{gallery.likes} people love this!</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
