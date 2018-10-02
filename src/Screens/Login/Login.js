import React,{Component } from "react";
import { Form, Icon, Input, Button } from 'antd';
import './Login.css';
import fire from "../../Firebase/Firebase";
import swal from 'sweetalert';
import Loader from "../../Components/Loader/Loader";

const FormItem = Form.Item;

class LoginForm extends Component {
  constructor(){
    super();
    this.state={
      isLoader:false,
      isRegisterClick:false
    }
    this.SignInUser=this.SignInUser.bind(this);
  }
  SignInUser(e){
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {        
          fire.auth().signInWithEmailAndPassword(values.email,values.password)
            .then((res)=>{
            this.setState({isLoader:true},()=>{
              setTimeout(()=>{
                  swal("Congratulation!!", "Successfully SignIn Your Account", "success");
                  localStorage.setItem("isCategoryShow",true);
                  this.props.getCategoryUpdate();
                },2000);      
            })
          })
          .catch((error)=> {
            swal("Error!", error.message, "error");
          });
          }
         // console.log("err",err);
      });  
  }
  isRegisterValSave(){
    this.setState({isRegisterClick:true},()=>{
      this.props.getIsRegisterClickUpdate();
      localStorage.setItem("isRegisterValue",this.state.isRegisterClick);
      //console.log("true");
    })
  }
  
  LoginFormUI(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div className="mainLoginForm">
      <div className="LoginForm">
      <span style={{color:"blue",fontFamily:"cursive"}}>
        <h1>Login Form</h1>
      </span>
      <Form onSubmit={this.SignInUser} className="login-form">
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="mail" theme="outlined" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <a className="login-form-forgot" >Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a onClick={()=>{this.isRegisterValSave()}}>register now!</a>
        </FormItem>
      </Form>
      </div>
      </div> 
   
    )
  }
  render() {
    const {isLoader}=this.state;
   // console.log("getFieldDecorator",getFieldDecorator);
    return (
      <div>
        {!isLoader && this.LoginFormUI()}
        {isLoader && <Loader/>}
      </div>
    );
  }
}

const Login = Form.create()(LoginForm);
export default Login;

