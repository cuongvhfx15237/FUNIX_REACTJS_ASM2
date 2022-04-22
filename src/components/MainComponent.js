import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
    };
  }

  render() {
    // const HomePage = () => {
    // return (
    //   <Home/>
    // );
    // }
    return(
     
      <div>
        <Header />
        <Routes>
              <Route path='/home' element={<Home/>} />
              <Route path='/menu' element={<Menu dishes={this.state.dishes} />}/>
              <Route path='/*' element={<Navigate to="/home" />}/>
        </Routes>
        <Footer />
      </div>
    
    );

  }
}


export default Main;