import React, {Component} from 'react'

class AppComponent extends Component{
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default AppComponent