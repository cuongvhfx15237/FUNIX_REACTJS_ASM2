import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
// import { Pass } from './MenuComponent'


  function RenderDish({dish}) {
      return (
        <Card key={dish.id}>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
  }

  function RenderComment({comments}) {
      return (
        <div className="container" style={{padding: 0 + 'em'}}>
        <Card >
          <CardBody >
            <h2>COMMENTS</h2>
            {comments.map((comment)=> {
              return (
                <div key={comment.id}>
                  <CardText>
                    {comment.comment}
                  </CardText>
                  <CardText>
                    {comment.author}, 
                    {new Intl.DateTimeFormat('en-US', 
                    { year: 'numeric', month: 'short', day: '2-digit'}).format(
                      new Date(Date.parse(comment.date)))}
                    </CardText>

                  <br></br>
                </div>
              );
            })}
          </CardBody>
        </Card>
        </div>
      );
  }
    const DishDetail = (props) => {
      if (props.dish != null){
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish}/>
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComment comments={props.dish.comments}/>
          </div>
        </div>
        </div>
    );
  }
  else { return <div></div>}
}

export default DishDetail;
