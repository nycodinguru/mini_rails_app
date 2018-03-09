import React, { Component } from 'react';
import axios from 'axios';

export default class SingleCupcake extends Component {
  constructor(props){
    super(props)

    this.state = {
      flavor: null,
      size: null,
      price: null,
      location_id: null
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.returnHome = this.returnHome.bind(this);
  }

  handleChange(e){
    const name = e.target.name
    const val = e.target.value

    this.setState({
      [name]: val
    });
  }

  handleSubmit(e, cupcakeId){
    e.preventDefault()

    const data = this.state

    axios({
      url: 'http://localhost:3000/cupcakes/',
      data: data,
      method: 'post'
    }).then( response => {
      this.props.history.push('/cupcakes/')
    })
  }

  returnHome(cupcakeId){

    this.props.history.push('/cupcakes/');
  }

  render(){


    return(
      <div>
       <div className="cup-cake-div-single">
        <h2> ADD A CUPCAKE </h2>
        <input className="cup-cake-edit-inputs" type="text" placeholder="flavor" value={this.state.flavor} name="flavor" onChange={this.handleChange}></input>
        <input className="cup-cake-edit-inputs" type="text" placeholder="size" value={this.state.size} name="size" onChange={this.handleChange}></input>
        <input className="cup-cake-edit-inputs" type="text" placeholder="price" value={this.state.price} name="price" onChange={this.handleChange}></input>
        <input className="cup-cake-edit-inputs" type="text" placeholder="location ID" value={this.state.location_id} name="location_id" onChange={this.handleChange}></input>
        </div>
        <ul className="nav-menu-ul">
          <li className="nav-menu-li" onClick={ (e) => this.handleSubmit(e)}>SUBMIT</li>
          <li className="nav-menu-li" onClick={this.returnHome}>HOME</li>
        </ul>
      </div>
      )
  }
}