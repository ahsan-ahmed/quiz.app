import React,{Component} from "react";
import { Button, Menu, Dropdown, Icon } from 'antd';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Go To category</Menu.Item>
    <Menu.Item key="2">Check Your Quiz</Menu.Item>
    <Menu.Item onClick={()=>{}} key="3" >LogOut</Menu.Item>
  </Menu>
);
class DropdownButton extends Component{
   constructor(){
     super();
     this.state={}
   }
        render(){
            return(
                <div>
                <Dropdown overlay={menu}>
                  <Button>
                    {this.props.passUsername} <Icon type="down" />
                  </Button>
                </Dropdown>
              </div>
            )
        }
}

export default DropdownButton;