import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage = () => {
    return (
      <Home
      dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
    );
    }
      <Routes>
        <Route exact path='/contactus' component={Contact} />
              {/* <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} /> */}
              <Navigate to="/home" />
          </Routes>
    return(
      <div>
        <Header />
        <Menu dishes={this.state.dishes}
         onClick={(dishId) =>
         this.onDishSelect(dishId)} />
        <DishDetail 
        dish={this.state.dishes.filter((dish) => 
            dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    
    );
  }
}


export default Main;