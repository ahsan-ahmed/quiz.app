import React, { Component } from "react";
import { Button } from 'antd';

import "../../App.css";


class ButtonComponent extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  render() {
    return (
       <div>
         <Button type="primary">Primary</Button>
       </div>     
    );
  }
}
export default ButtonComponent;
