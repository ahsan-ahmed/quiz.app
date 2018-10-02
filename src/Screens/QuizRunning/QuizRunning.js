import React,{Component} from 'react';
import "./QuizRunning.css";
import { Radio,message } from 'antd';
import Timer from "../../Components/Timer/Timer";
const RadioGroup = Radio.Group;

const error = () => {
    message.error('Select any one of the above !',1);
};
const warning = () => {
  message.warning('this is the Last Question To you !',5);
};

class QuizRunning extends Component{
  constructor(){
    super();
    const selectedQuiz=JSON.parse(localStorage.getItem("SpecificQuizDetail"));
    if(!localStorage.getItem("currentQuestion")){
      localStorage.setItem("currentQuestion",0);
    }
    
    this.state={selectedQuiz,currentQuestion:JSON.parse(localStorage.getItem("currentQuestion")),correct:0,inCorrect:0,value:""}
    this.onChange=this.onChange.bind(this);
    this.onButtonPress=this.onButtonPress.bind(this);
  }

  onChange(e){
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  onButtonPress(e){
    e.preventDefault();
    const { value,selectedQuiz,correct,currentQuestion,inCorrect}=this.state;
    const totalLength=selectedQuiz.questions.length-1;
    if(value===""){
          error();
    }

    else if(currentQuestion===totalLength){
      localStorage.setItem("isSpecificQuizDetailShow",true);
      localStorage.setItem("quizKey",false);
      localStorage.setItem("currentQuestion",0);
      localStorage.setItem("SpecificQuizDetail",JSON.stringify({selectedQuiz,"score":correct}))
      this.props.quizOver();
      this.props.takeScore();
     }
    else{
      if(value===selectedQuiz.questions[currentQuestion].correct ){
          this.setState({correct:correct+1,currentQuestion:currentQuestion+1,flag:false },()=>{
          localStorage.setItem("currentQuestion",currentQuestion+1);
          console.log(currentQuestion,totalLength);
        if(currentQuestion===totalLength-1){
            warning();
         }
          });
      }
     
      else{
        this.setState({inCorrect:inCorrect+1,currentQuestion:currentQuestion+1},()=>{
          localStorage.setItem("currentQuestion",currentQuestion+1);
          console.log(currentQuestion,totalLength);
        if(currentQuestion===totalLength-1){
            warning();
         }})
      }
      console.log("hurrah",value,selectedQuiz.questions[currentQuestion].correct);
    }
  }

  quizDisplay(){
    const {selectedQuiz,currentQuestion,correct,inCorrect}=this.state;
    console.log("--->",selectedQuiz,"correct->>",correct,"inCorrect->>",inCorrect);
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return(
      <div>
         <div className="headerQuizName"><h1>{"Quiz: "+selectedQuiz.name}</h1></div>
     {/* <div >{"Time allowed: "+selectedQuiz.timeAllowed}</div> */}
     <div className="headerTime">
     <Timer initializeTime={240}/>
     </div>
   <div>
    <h3><b>{"Q"+(currentQuestion+1) +": "}</b>{selectedQuiz.questions[currentQuestion].question}</h3>
    <form onSubmit={this.onButtonPress}>
    <RadioGroup onChange={this.onChange}>
    <table>
    <tbody>
       {selectedQuiz.questions[currentQuestion].answers.map((item,count)=>{
         return(
        <tr>
          <td><Radio style={radioStyle} id={"count"+count} value={count}></Radio></td> 
          <td><label htmlFor={"count"+count} style={{marginTop:7,cursor:"pointer"}}>{item}</label></td>
        </tr>
           )
          }
          )
        }
        <td></td>
        <td><button type="primary" onClick="submit" onChange={this.onChange} style={{backgroundColor:"blue",width:80}}>Next</button></td>                      
      </tbody>
    </table>
    </RadioGroup>
    </form>        
  </div>
      </div>
    )
  }

  render(){
    return (
    <div>
    {this.quizDisplay()}
     </div>
  );
}
};
export default QuizRunning;
