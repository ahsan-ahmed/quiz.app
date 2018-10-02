import React,{Component} from 'react';
import BackwardButton from "../../Components/Button/BackwardButton/BackwardButton";
import swal from "sweetalert";
import { message,Progress } from 'antd';

const success = () => {
    message.success('Proctoring Key is Valid !');
  };
  
  const error = () => {
    message.error('Invalid Key');
  };
  
class SpecificQuizDetail extends Component{
    constructor(){
        super();
    const selectedQuiz=JSON.parse(localStorage.getItem("SpecificQuizDetail")) 
    this.state={score:selectedQuiz.score}
    
  } 
  GotoQuizInfo(){
    const isRegisterValue=false,isCategoryPageShow=false,QuizInfo=true,isSpecificQuizDetailShow=false;
    localStorage.setItem("isCategoryShow",JSON.stringify(false));
    localStorage.setItem("QuizInfo",JSON.stringify(true)); 
    localStorage.setItem("isSpecificQuizDetailShow",JSON.stringify(false));
    this.props.GotoCategoryFromQuizInfo(isRegisterValue,isCategoryPageShow,QuizInfo,isSpecificQuizDetailShow);
  } 
  Body(){
      const SpecificQuizDetail=JSON.parse(localStorage.getItem("SpecificQuizDetail"));
      const{score}=this.state;
      return(
        <div className="innerBlock">
        <div class="card mb-3 text-center hoverable">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4 offset-md-1 mx-3 my-3">
                        <div class="view overlay">
                            <image src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" class="img-fluid" alt="Sample image for first version of blog listing"/>
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                    </div>
                 
                    <div class="col-md-7 text-left ml-3 mt-3">
                        <i href="" class="green-text">
                            <h6 class="font-bold pb-1"><i class="fa fa-desktop"></i>Quiz App</h6>
                        </i>
                        <h4 class="mb-4"><strong>{"Quiz Name: "+SpecificQuizDetail.name}</strong></h4>
                        <p><strong>Description:</strong><br/>A quiz can function throughout a course as an informative feedback 
                            device allowing both the instructor and the students to see where
                             they are excelling or need more focus.</p>
                        <p><strong>Total Questions: </strong>{SpecificQuizDetail.totalQuestions}</p>
                        <p><strong>Time Allowed: </strong>{SpecificQuizDetail.timeAllowed}</p>
                        {this.state.score===undefined ? <a class="btn btn-success" onClick={()=>{
                            swal("Enter Proctoring Key:", {
                            content: "input",
                          })
                          .then((value) => {
                           const quizKey=SpecificQuizDetail.password===value ? true:false;
                           console.log(quizKey);
                           if(quizKey){
                               success();
                            localStorage.setItem("isSpecificQuizDetailShow",false);
                            localStorage.setItem("quizKey",true);                        
                            this.props.getQuizKey(quizKey);
                            }
                            else{
                             error();   
                            }
                        });
                        }}>Start Quiz</a>:

                          <div>
                             {((score/10)*100) >50 ? <div>
                                 <Progress type="circle" percent={(score/10)*100}/>
                                  <span style={{fontSize:40,marginLeft:30}}>{((score/10)*100)+"%"}</span>
                             </div> :
                             <div>
                                 <Progress type="circle" percent={(score/10)*100} status="exception" />
                                 <span style={{fontSize:40,color:"red",marginLeft:30}}>{((score/10)*100)+"%"}</span>
                             </div>
                             } 
                          </div> }
                        
                    </div>
                </div>
            </div>
        </div>
  </div>
      )
  }
  BackwardButtonFooter(){
      return(
        <div className="travelForwardButton">
        <BackwardButton isClickMoveButton={()=>{this.GotoQuizInfo()}}/>
      </div>
    )
  } 
  render(){
      console.log("specificScore====",this.props.passScore,this.state.score)
    return (
    <div>
        {this.Body()}
       {this.BackwardButtonFooter()}
    </div>
  );
}
};

export default SpecificQuizDetail;
