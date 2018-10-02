import React,{Component} from "react";
import { Button } from 'antd';

class CustomButton extends Component{
    render(){
        return(
            <div>
            <Button type="primary" onClick={()=>{this.props.CustomButtonClick()}}>Go To Quiz</Button>
            </div>
        )
    }
}
export default CustomButton;
