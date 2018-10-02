import React,{Component} from 'react';

class ForwardButton extends Component {
  render() {
    return (
      <div>
  <div class="col-md-6 col-xl-4 mt-2 text-center mb-4">
    <button type="button" onClick={()=>{this.props.isClickMoveButton()}} 
    class="btn btn-indigo px-4"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
  </div>
      </div>
    );
  }
}

export default ForwardButton;