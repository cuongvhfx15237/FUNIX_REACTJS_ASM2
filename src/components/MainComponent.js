import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent'
import DishDetail from './DishdetailComponent'
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
// import { withRouter } from './withRouter';



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

  render() {
    const HomePage = () => {
      return(
        <Home dish = {this.state.dishes.filter((dish)=> dish.featured)[0]}
        promotion = {this.state.promotions.filter((promo)=> promo.featured)[0]}
        leader={this.state.leaders.filter((leader)=> leader.featured)[0]}/>
      )
    }

    
    const DishWithId = () => {
      debugger
      const id = useParams();
        return (
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(id.dishId,10))[0]}
            comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(id.dishId,10))}
            />
          )
    }
    return(
     
      <div>
        <Header />
        <Routes>
              <Route path='home' element={<HomePage/>}       />
              <Route path='menu' element={<Menu dishes={this.state.dishes} />}/>
              <Route path='menu/:dishId' element={<DishWithId/>}/>
              <Route path='aboutus' element={<Contact/>}/>
              <Route path='contactus' element={<Contact/>}/>
              <Route path='*' element={<Navigate to="home" />}/>
        </Routes> 
        <Footer />
      </div>
    
    );

  }
}


export default Main;

