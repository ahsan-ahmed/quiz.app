import React, { Component } from 'react';
import './App.css';
import Login from "./Screens/Login/Login";
import SignUp from "./Screens/SignUp/SignUp.js";
// import fire from "./Firebase/Firebase";
import Categories from "./Screens/Categories/Categories";
import QuizInfo from './Screens/QuizInfo/QuizInfo';
import SpecificQuizDetail from "./Screens/SpecificQuizDetail/SpecificQuizDetail";
import QuizRunning from "./Screens/QuizRunning/QuizRunning";

class App extends Component {
  constructor(){
    super();
    this.state={
      isRegisterClick:false,
      isCategoryPageShow:false,
      categoryToQuizInfo:false,
      isSpecificQuizDetailShow:false,
      quizKey:false
    }
  }
  registerClicked(){
    this.setState({isRegisterClick:true})
    console.log("registerClicked");
  }

  componentDidMount(){
    console.log("componentDidMount");
    const isRegisterClick=JSON.parse(localStorage.getItem("isRegisterValue"));
    const isCategoryPageShow=JSON.parse(localStorage.getItem("isCategoryShow"));
    const categoryToQuizInfo=JSON.parse(localStorage.getItem("QuizInfo"));
    const isSpecificQuizDetailShow=JSON.parse(localStorage.getItem("isSpecificQuizDetailShow"));
    const quizKey=JSON.parse(localStorage.getItem("quizKey"));
    this.setState({isRegisterClick,isCategoryPageShow,categoryToQuizInfo,isSpecificQuizDetailShow,quizKey})
  }
  categoryShow(){
    this.setState({isCategoryPageShow:true},()=>{
      console.log("categoryShow"); 
    });
  }
  logout(){
    if (localStorage.getItem("isCategoryShow")) {
      this.setState({isCategoryPageShow:false,categoryToQuizInfo:false},()=>{
        localStorage.setItem("isRegisterValue",false);
        localStorage.setItem("isCategoryShow",false);
        localStorage.setItem("QuizInfo",false);

      });
    }
  }

  NavbarClick(){
    this.setState({isCategoryPageShow:true,categoryToQuizInfo:false});
  }

  quizInfo=(categoryToQuizInfo)=>{
    this.setState({categoryToQuizInfo:true,targetQuizInfo:categoryToQuizInfo})
    localStorage.setItem("quizArray",JSON.stringify(categoryToQuizInfo));
    console.log("categoryToQuizInfo--->",categoryToQuizInfo);
  }

  GotoLoginPanel=(isRegisterClick,isCategoryPageShow,QuizInfo,isSpecificQuizDetailShow)=>{
    console.log(isRegisterClick,isCategoryPageShow,QuizInfo,isSpecificQuizDetailShow);
    this.setState({isRegisterClick,isCategoryPageShow,categoryToQuizInfo:QuizInfo,isSpecificQuizDetailShow});
  }
  getTargetQuizArray=(targetQuizArray)=>{
    console.log("=====",targetQuizArray);
    this.setState({isSpecificQuizDetailShow:true,isCategoryPageShow:false,QuizInfo:false,categoryToQuizInfo:false,targetQuizArray})
  }
  getQuizKeyMethod=(quizKey)=>{
    this.setState({quizKey, isSpecificQuizDetailShow:false})
  }
  quizOverGetProgress(){
    this.setState({isSpecificQuizDetailShow:true,quizKey:false});
    console.log("chal gya");
  }
  showScore=(score)=>{
     console.log("score--->",score);
     this.setState({score})
  }
  render() {
    const {isRegisterClick,isCategoryPageShow, categoryToQuizInfo,isSpecificQuizDetailShow,quizKey,score}=this.state;
    console.log("rendder---->",isRegisterClick,isCategoryPageShow,categoryToQuizInfo,quizKey);
    return (
      <div className="App">
        { !isRegisterClick && !isCategoryPageShow && !categoryToQuizInfo && !isSpecificQuizDetailShow && !quizKey &&<Login getIsRegisterClickUpdate={()=>{this.registerClicked()}} getCategoryUpdate={()=>{this.categoryShow()}}/>}
        { isRegisterClick && !isCategoryPageShow && !categoryToQuizInfo &&<SignUp getCategoryUpdate={()=>{this.categoryShow()}} GotoLoginFromSignup={this.GotoLoginPanel}/>}
        { isCategoryPageShow && !categoryToQuizInfo && <Categories logoutUser={()=>{this.logout()}} NavbarParaClick={()=>{this.NavbarClick()}} getTargetCategory={this.quizInfo}/>}
        { categoryToQuizInfo  &&  <QuizInfo NavbarParaClick={()=>{this.NavbarClick()}} logoutUser={()=>{this.logout()}} GotoCategoryFromQuizInfo={this.GotoLoginPanel}
             getQuizInfoDetail={this.getTargetQuizArray} />}
        { isSpecificQuizDetailShow  && <SpecificQuizDetail GotoCategoryFromQuizInfo={this.GotoLoginPanel} 
        getQuizKey={this.getQuizKeyMethod} passScore={score}/>} 
        {  quizKey && <QuizRunning quizOver={()=>{this.quizOverGetProgress()}} takeScore={this.showScore}/>}
      </div>
    );
  }
}

export default App;
