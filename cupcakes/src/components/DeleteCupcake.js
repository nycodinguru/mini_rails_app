import React, { Component } from 'react';
import axios from 'axios';

export default class SingleCupcake extends Component {
  constructor(props){
    super(props)

    this.editView = this.editView.bind(this);
    this.returnHome = this.returnHome.bind(this);
  }

  handleSubmit(e, cupcakeId){
    e.preventDefault()

    axios({
      url: `http://localhost:3000/cupcakes/${cupcakeId}`,
      method: 'delete'
    }).then( response => {
      this.props.history.push('/cupcakes/')
    })
  }

  editView(cupcakeId){

    // const cupcakeId = e.cupcake.id

    this.props.history.push(`/cupcakes/edit/${cupcakeId}`);
  }

  returnHome(cupcakeId){

    this.props.history.push('/cupcakes/');
  }

  componentDidMount(){
    var body = document.querySelectorAll('body');

    body[0].classList.toggle('body-blur');
  }

  render(){

    const cupcake = this.props.cupcakes.find( i => {
        return i.id === Number(this.props.match.params.id);
    })

    return(
      <div>
        <div className="confirmation-div"> <p onClick={ (e) => this.handleSubmit(e, cupcake.id)}> DELETE</p></div>
      </div>
      )
  }
}