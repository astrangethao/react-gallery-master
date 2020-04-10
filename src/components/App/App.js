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

  handleLikes(event) {
    const imageId = event.target.id;
    console.log("clicked!", imageId);
    // this.setState({
    //   galleryList: [...this.state.galleryList],
    // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />

        <div className="container">
          {this.state.galleryList.map((gallery, index) => (
            <div key={index}>
              <img src={gallery.path} />
              <br />
              <h2>{gallery.title}</h2>
              <p>
                <em>{gallery.description}</em>
              </p>
              <button onClick={this.handleLikes} id={gallery.id}>
                Love It!
              </button>
              <p>{gallery.likes} people love this!</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
