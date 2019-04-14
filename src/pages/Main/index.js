import React, { Component } from 'react';
import api from '../../services/api';

import  './styles.css';
import logo from '../../assets/logo.svg';

export default class Main extends Component {

  state = {
    newBox :'',
  };

  handlerSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.newBox);
    const response = await api.post('/boxes',{
        title : this.state.newBox,
    });
    console.log(response.data);

    //para redirecionar o usuário 
    this.props.history.push(`/box/${response.data._id}`);
  }

  handlerInputChange = (e) => {
    this.setState({
      newBox: e.target.value
    })
  }


  render() {
    return (
        <div id="main-container">
          <form onSubmit={this.handlerSubmit}>
            <img src={logo} alt=""></img>

              <input placeholder="Criar um box" 
              value={this.state.newBox} 
              onChange={this.handlerInputChange}/>

              <button type="submit" >Criar</button>
          </form>
        </div>
    );
  }
}
