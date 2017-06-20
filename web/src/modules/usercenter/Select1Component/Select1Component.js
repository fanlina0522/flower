import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class PopoverExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      gender:'select'
    };
  }

  handleTouchTap (event){
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }
  handleRequestClose(){
    this.setState({
      open: false,
    });
  }
  gender(event){
      let gender = event.target.innerHTML
      this.setState({gender:gender,open:false})
  }
  render() {
    return (
      <div>
        <RaisedButton  
          onClick={this.handleTouchTap.bind(this)}
          label={this.state.gender}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this)}
        >
          <Menu>
            <MenuItem primaryText="Gentleman" onClick={this.gender.bind(this)}/>
            <MenuItem primaryText="Lady " onClick={this.gender.bind(this)}/>
          </Menu>
        </Popover>
      </div>
    );
  }
}