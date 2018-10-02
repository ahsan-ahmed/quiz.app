import React,{Component} from "react";
import { Card } from 'antd';
import CustomButton from "../Button/CustomButton/CustomButton";

class SimpleCard extends Component{
    
    render(){
        return(
        <div>
            <Card title={"Quiz : "+this.props.getCategory.number} style={{ width: 300,margin:20}}>
                <h3>{this.props.getCategory.name}</h3>
                 <CustomButton CustomButtonClick={()=>{this.props.quizInfoDetail(this.props.getCategory)}}/>
            </Card>
        </div>
            )
    }
}
export default SimpleCard;