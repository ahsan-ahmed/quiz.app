import React,{Component } from "react";
import { Form, Icon, Input, Button } from 'antd';
  import './SignUp.css';
  import swal from 'sweetalert';
  import fire from "../../Firebase/Firebase";
  import Loader from "../../Components/Loader/Loader";
  import ForwardButton from "../../Components/Button/ForwardButton/ForwardButton";
  const FormItem = Form.Item;
  const db = fire.firestore();

  class SignUpForm extends Component {
    constructor(){
      super();
      this.state={
        isLoader:false
      }
      this.authenticateUser=this.authenticateUser.bind(this);
    }

    authenticateUser(e){
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
      if (!err) {        
      fire.auth().createUserWithEmailAndPassword(values.email, values.password)
      .then((res)=>{
        this.setState({isLoader:true},()=>{
          setTimeout(()=>{
            db.collection('users').doc(res.user.uid).set({username:values.username,email:values.email})
            .then(()=>{
              swal("Congratulation!!", "Successfully Created Account", "success");
              console.log("successfully save in db");
              localStorage.setItem("isCategoryShow",true);
              this.props.getCategoryUpdate();
            })
            .catch((error)=> {
              console.log("Error! not save in db!!!");
          });
        },2000);      
      })
    })
    .catch((error)=> {
      swal("Error!", error.message, "error");
    });
    }
    });
  }
  GotoLogin(){
    const isRegisterValue=false,isCategoryPageShow=false,QuizInfo=false;
    localStorage.setItem("isRegisterValue",JSON.stringify(false));
    localStorage.setItem("isCategoryShow",JSON.stringify(false)); 
    this.props.GotoLoginFromSignup(isRegisterValue,isCategoryPageShow,QuizInfo);
  }

  SignUpFormUI(){
    const { getFieldDecorator } = this.props.form; 
    return(
       <div className="SignUpForm">
       <div className="headerOne">
       <div className="headerTwo" style={{color:"blue",fontFamily:"cursive"}}>
        <h1 >Signup Form</h1>
      </div>
       </div>
      <Form onSubmit={this.authenticateUser} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="mail" theme="outlined" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign Up
          </Button>
         </FormItem>
      </Form>
         <div className="travelForwardButton">
        <ForwardButton isClickMoveButton={()=>{this.GotoLogin()}}/>
      </div>
      
      </div>
     )
  }
  render() {
    const {isLoader}=this.state;
    //console.log("getFieldDecorator",getFieldDecorator);
    return (
      <div className="mainSignUpForm">
       {!isLoader && this.SignUpFormUI()}
       {isLoader && <Loader/>}
      </div>
    );
  }
}

const SignUp = Form.create()(SignUpForm);
export default SignUp;