import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
// component files

import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";
import NotFound from "./components/NotFound";

import apiKey from "./config";
const ApiKey = apiKey;
/**
 * App renders the whole app
 * */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      query: "",
      loading: true,
      sunsets: [],
      football: [],
      stars: [],
    };
  }
  //default search actions when the app is started
  componentDidMount() {
    this.performSearch("stars");
    this.performSearch("sunsets");
    this.performSearch("football");
  }
  //implements the search action and the default search query on the navigation
  performSearch = (query) => {
    this.setState({ loading: true });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (query === "sunsets" || query === "football" || query === "stars") {
          this.setState({
            [query]: response.data.photos.photo,
            loading: false,
          });
        } else {
          this.setState({
            photos: response.data.photos.photo,
            query,
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.log("Error fetching and parsing data:", error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav onSearch={this.performSearch} />

          <Switch>
            <Route exact path="/" render={() => <Redirect to="/football" />} />
            <Route
              exact
              path="/sunsets"
              render={() => (
                <PhotoList
                  data={this.state.sunsets}
                  loading={this.state.loading}
                  query="sunsets"
                />
              )}
            />
            <Route
              exact
              path="/football"
              render={() => (
                <PhotoList
                  data={this.state.football}
                  loading={this.state.loading}
                  query="football"
                />
              )}
            />
            <Route
              exact
              path="/stars"
              render={() => (
                <PhotoList
                  data={this.state.stars}
                  loading={this.state.loading}
                  query="stars"
                />
              )}
            />
            <Route
              exact
              path="/search/:query"
              render={() => (
                <PhotoList
                  data={this.state.photos}
                  loading={this.state.loading}
                  query={this.state.query}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
