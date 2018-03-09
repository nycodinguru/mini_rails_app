import React, { Component } from 'react';

export default class SingleCupcake extends Component {
  constructor(props){
    super(props)

    this.editView = this.editView.bind(this);
    this.returnHome = this.returnHome.bind(this);
    this.deleteView = this.deleteView.bind(this);
  }

  editView(cupcakeId){


    this.props.history.push(`/cupcakes/edit/${cupcakeId}`);
  }

  returnHome(cupcakeId){

    this.props.history.push('/cupcakes/');
  }

   deleteView(cupcakeId){

    this.props.history.push(`/cupcakes/delete/${cupcakeId}`);
  }



  render(){

    const cupcake = this.props.cupcakes.find( i => {
        return i.id === Number(this.props.match.params.id);
    })

    return(
      <div className="blur-me" onClick={ () => this.editView(cupcake.id)}>
       <div className="cup-cake-div-single">
        <h2>{cupcake.flavor} cupcake</h2>
        <h3>size: {cupcake.size}</h3>
        <h3>price: {cupcake.price}</h3>
        <h3>location: {cupcake.location_id}</h3>
        </div>
        <ul className="nav-menu-ul">
          <li className="nav-menu-li" onClick={ () => this.editView(cupcake.id)}>EDIT</li>
            <li className="nav-menu-li del-button" onClick={ () => this.deleteView(cupcake.id)}>DELETE</li>
          <li className="nav-menu-li" onClick={this.returnHome}>HOME</li>
        </ul>
      </div>
      )
  }
}