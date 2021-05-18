import React, { Component } from "react";
import axios from "axios";

// Imports //
import NotFound from "./components/NotFound";
import PhotoList from "./components/PhotoList";
import Featured from "./components/Featured";
import apiKey from "./config";
import Nav from "./components/Nav";

import { Route, BrowserRouter, Switch } from "react-router-dom";
// API Key Variable
const ApiKey = apiKey;

class App extends Component {
  state = { photos: [] };

  /* Gets data from Flikr API using Axios */
  // Query param to create unique search results
  

  handleSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({ photos: response.data.photos.photo });
      })
      .catch((error) => console.log("Error in fetching data!", error));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav handleSearch={this.handleSearch} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <PhotoList data={this.state.photos} />}
            />

            <Route path="/:name" component={Featured} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
