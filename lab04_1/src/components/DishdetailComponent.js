import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
// import { Pass } from './MenuComponent'

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedDish:null,
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish=this.props.dish) {
    if (dish != null) {
      return (
        <Card key={dish.id}>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  renderComment(dish=this.props.dish) {
    if (dish != null) {
      return (
        <div className="container">
        <Card >
          <CardBody >
            <h2>Comments</h2>
            {dish.comments.map(function (comments) {
              return (
                <div key={comments.id}>
                  <CardText>{comments.comment}</CardText>
                  <CardText>
                    {comments.author}, {new Intl.DateTimeFormat('en-US', 
                    { year: 'numeric', month: 'short', day: '2-digit'}).format(
                      new Date(Date.parse(comments.date)))}
                  </CardText>
                  <br></br>
                </div>
              );
            })}
          </CardBody>
        </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    const dish = this.props.selectedDish;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComment(this.state.dish)}
          </div>
        </div>
        </div>
    );
  }
}
export default DishDetail;
