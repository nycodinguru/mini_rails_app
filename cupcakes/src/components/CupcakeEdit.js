import React, { Component } from 'react';
import axios from 'axios';

export default class SingleCupcake extends Component {
  constructor(props){
    super(props)

    const cupcake = this.props.cupcakes.find( i => {
        return i.id === Number(this.props.match.params.id);
    })

    this.state = {
      flavor: cupcake.flavor,
      size: cupcake.size,
      price: cupcake.price,
      location_id: cupcake.location_id
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
      url: `http://localhost:3000/cupcakes/${cupcakeId}`,
      data: data,
      method: 'put'
    }).then( response => {
      this.props.history.push(`/cupcakes/${cupcakeId}`)
    })
  }

    returnHome(cupcakeId){

    this.props.history.push('/cupcakes/');
  }

  render(){

    const cupcake = this.props.cupcakes.find( i => {
        return i.id === Number(this.props.match.params.id);
    })

    return(
      <div>
       <div className="cup-cake-div-single">
        <h2> EDIT </h2>
        <input className="cup-cake-edit-inputs" type="text" placeholder={cupcake.flavor} value={this.state.flavor} name="flavor" onChange={this.handleChange}></input>
        <input className="cup-cake-edit-inputs" type="text" placeholder={cupcake.size} value={this.state.size} name="size" onChange={this.handleChange}></input>
        <input className="cup-cake-edit-inputs" type="text" placeholder={cupcake.price} value={this.state.price} name="price" onChange={this.handleChange}></input>
        <input className="cup-cake-edit-inputs" type="text" placeholder={cupcake.location_id} value={this.state.location_id} name="location_id" onChange={this.handleChange}></input>
        </div>
        <ul className="nav-menu-ul">
          <li className="nav-menu-li" onClick={ (e) => this.handleSubmit(cupcake.id, e)}>SUBMIT</li>
          <li className="nav-menu-li" onClick={this.returnHome}>HOME</li>
        </ul>
      </div>
      )
  }
}