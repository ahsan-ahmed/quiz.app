import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarNav,NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Container,Row,Col } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import SimpleCard from "../../Components/SimpleCard/SimpleCard";
import "./QuizInfo.css"
import BackwardButton from "../../Components/Button/BackwardButton/BackwardButton";

class QuizInfo extends Component {
  constructor() {
    super();
    this.state = {};
  }
  NavbarParaClick(){
    localStorage.setItem("QuizInfo",false)
      this.props.NavbarParaClick();
  }
  logoutUser(){
    this.props.logoutUser(); 
  }
  header(){
    const username=localStorage.getItem("username")
      return(
        <div>
        <Container>
          <Router>  
            <Navbar dark color="indigo" expand="lg">
          <NavbarBrand >
              <strong onClick={()=>{this.NavbarParaClick()}}style={{color:"white"}}>Panacloud Quiz App</strong>
          </NavbarBrand>  
          <NavbarNav right>
          <NavItem>
          <Dropdown>
                  <DropdownToggle nav caret><i class="fa fa-user-circle" aria-hidden="true"></i>{username}</DropdownToggle>
                <DropdownMenu >
                    <DropdownItem >Go To category</DropdownItem>
                    <DropdownItem >Check Your Quiz</DropdownItem>
                    <DropdownItem onClick={()=>{this.logoutUser()}}>Log Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>  
            </NavItem>
             </NavbarNav>  
                </Navbar>
              </Router>
          </Container>
    </div>
      )
    }

    quizInfoDetailArray=(array)=>{
           console.log("target_Quiz-->",array);    
          localStorage.setItem("SpecificQuizDetail",JSON.stringify(array));
          localStorage.setItem("isSpecificQuizDetailShow",JSON.stringify(true));
          localStorage.setItem("QuizInfo",JSON.stringify(false)); 
          localStorage.setItem("isCategoryShow",JSON.stringify(false));
          this.props.getQuizInfoDetail(array);         
    }

    body(){
      const quizArray=JSON.parse(localStorage.getItem("quizArray")); 
      if(!quizArray.quiz){
        return(
          <div class="jumbotron jumbotron-fluid" style={{background: '#ECECEC'}}>
            <div class="container">
                <h1 class="h1-reponsive mb-4 mt-2 blue-text font-bold">There Was No Quiz</h1>
                <p class="lead">We will making Quiz for you in very short time .</p>
            </div>
          </div>
      )}
      else{
        return(
          <div className="innerBlock">
         <Container fluid >
        <Row>
          { quizArray.quiz.map((value,count)=>
            <Col sm="3">
        <SimpleCard getCategory={value } getCount={count} quizInfoDetail={this.quizInfoDetailArray}/>
          </Col>
          )} 
        </Row>
        </Container>
      </div> )}
  }
  GotoCategory(){
    const isRegisterValue=false,isCategoryPageShow=true,QuizInfo=false;
    localStorage.setItem("isCategoryShow",JSON.stringify(true));
    localStorage.setItem("QuizInfo",JSON.stringify(false)); 
    this.props.GotoCategoryFromQuizInfo(isRegisterValue,isCategoryPageShow,QuizInfo);
  }
    BackwardButtonFooter(){
      return(
        <div className="travelForwardButton">
        <BackwardButton isClickMoveButton={()=>{this.GotoCategory()}}/>
      </div>
      )
    }
  render() {
    return (
      <div>
            {this.header()};
            {this.body()};
            {this.BackwardButtonFooter()}
       </div>     
    );
  }
}
export default QuizInfo;
