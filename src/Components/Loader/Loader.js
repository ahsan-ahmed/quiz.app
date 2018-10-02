import React,{Component} from 'react';
import { css } from 'react-emotion';
import { RingLoader	 } from 'react-spinners';
 
const override = css`
    display: block;
    margin:50px;
    border-color: red;
`;
 
class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <RingLoader	
          className={override}
          sizeUnit={"px"}
          size={220}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}
export default Loader;