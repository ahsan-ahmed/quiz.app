import React,{Component} from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, } from 'mdbreact';
import "./Card.css";

class CardExample extends Component{
  constructor(){
    super();
    this.state={
      isQuizList:true
    }
  }  
  checkCount(index){
    //console.log(index);
    this.props.takeQuizListClick(index)
  }

  render(){
    return (
    <div className="divCard">
      <Card className="cardCategory" count={this.props.getCategory.count}>
        <CardImage height="200px" src={this.props.getCategory.image} waves />
        <CardBody>
            <CardTitle>{this.props.getCategory.name}</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button onClick={()=>{this.checkCount(this.props.getCount)}}>Go To QuizList</Button>
        </CardBody>
    </Card>
      </div>
  );
}
};

export default CardExample;
