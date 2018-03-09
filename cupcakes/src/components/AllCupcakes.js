import React, { Component } from 'react';

export default class AllCupcakes extends Component {
  constructor(props){
    super(props)

    this.singleView = this.singleView.bind(this);
    this.newView = this.newView.bind(this);
  }


  singleView(cupcakeId){

    // const cupcakeId = e.cupcake.id

    this.props.history.push(`/cupcakes/${cupcakeId}`);
  }


  newView(cupcakeId){

    // const cupcakeId = e.cupcake.id

    this.props.history.push('/cupcakes/new');
  }


  render(){

    const cupcakes = this.props.cupcakes.map( cupcake => {
      return(
        <div className="cup-cake-div" onClick={ () => this.singleView(cupcake.id)}>
        <h2>{cupcake.flavor} cupcake</h2>
        <h3>size: {cupcake.size}</h3>
        <h3>price: {cupcake.price}</h3>
        <h3>location: {cupcake.location_id}</h3>
        </div>
        )
    })

    return(
      <div>
      {cupcakes}
      <ul className="nav-menu-ul">
          <li className="add-cupcake-button" onClick={this.newView}>ADD A CUPCAKE</li>
        </ul>
      </div>
      )
  }
}