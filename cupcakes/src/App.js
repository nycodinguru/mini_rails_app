import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import AllCupcakes from './components/AllCupcakes';
import SingleCupcake from './components/SingleCupcake';
import SingleCupcakeBlurred from './components/SingleCupcakeBlurred';
import CupcakeEdit from './components/CupcakeEdit';
import NewCupcake from './components/NewCupcake';
import DeleteCupcake from './components/DeleteCupcake';



class App extends Component {
  constructor(props){
    super(props)

      this.state = {

        allCupcakes: null,
        allLocations: null }
    
  }

  grabCupcakes(){
    axios({
      url: 'http://localhost:3000/cupcakes',
      method: 'get'
      }).then( response => {
        this.setState({allCupcakes: response.data})
      });
  }

  grabLocations(){
    axios({
      url: 'http://localhost:3000/locations',
      method: 'get'
      }).then( response => {
        this.setState({allLocations: response.data})
      });
  }

  componentDidMount(){
    this.grabCupcakes();
    // this.grabLocations();
  }

  render() {
     return (
      <div className="App">
        <Router>
          <Switch>

            <Route
              exact
              path="/"
              render={ () => <Redirect to="/cupcakes" />}
            />

            <Route
              exact
              path="/cupcakes"
              render={ props => {

    if (!this.state.allCupcakes){ return <center><h2>"LOADING..."</h2></center>}
    return (
      <div>
      <AllCupcakes {...props} cupcakes={this.state.allCupcakes}/>
      </div>

    );
    }
    }

  />

           <Route
          exact
          path="/cupcakes/edit/:id"
          render={ props => {
    if (!this.state.allCupcakes){ return <center><h2>"LOADING..."</h2></center>}
      return(
        <CupcakeEdit {...props} cupcakes={this.state.allCupcakes} />
              )
          }}

          />

          <Route
          exact
          path="/cupcakes/new"
          render={ props => {
    if (!this.state.allCupcakes){ return <center><h2>"LOADING..."</h2></center>}
      return(
        <NewCupcake {...props} />
              )
          }}

          />

          <Route
          exact
          path="/cupcakes/delete/:id"
          render={ props => {
    if (!this.state.allCupcakes){ return <center><h2>"LOADING..."</h2></center>}
      return(
        <div>
        <DeleteCupcake {...props} cupcakes={this.state.allCupcakes}/>
        <SingleCupcakeBlurred {...props} cupcakes={this.state.allCupcakes} />
        </div>
              )
          }}

          />

          <Route
          exact
          path="/cupcakes/:id"
          render={ props => {
    if (!this.state.allCupcakes){ return <center><h2>"LOADING..."</h2></center>}
      return(
        <SingleCupcake {...props} cupcakes={this.state.allCupcakes} />
              )
          }}

          />

          </Switch>
        </Router>
      </div>
    );
  } 
}

export default App;
