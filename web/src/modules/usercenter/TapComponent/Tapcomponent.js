import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import './Tapcomponent.scss' 

import EmtryComponent from '../EmtryComponent/EmtryComponent'
import TapListComponent from '../TapListComponent/TapListComponent'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 10,
    },
    slide: {
        paddingTop: 10,
      },
};
export default class TabsExampleSwipeable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }
    componentWillMount(){
        let indexId = window.location.hash
        indexId = Number(indexId.slice(-1))
        this.setState({
            slideIndex: indexId
        });
    }
    render() { 
        return (
            <div>
                <Tabs className="tapColor" value={this.state.slideIndex}>
                    <Tab label="全部" value={0} onClick = {()=>{this.setState({slideIndex:0})}} />
                    <Tab label="待付款" value={1} onClick = {()=>{this.setState({slideIndex:1})}}/>
                    <Tab label="待配送" value={2} onClick = {()=>{this.setState({slideIndex:2})}} />
                    <Tab label="待评价" value={3}  onClick = {()=>{this.setState({slideIndex:3})}} />
                </Tabs>
                <SwipeableViews  index={this.state.slideIndex} onChangeIndex={this.handleChange}>
                    <div style={styles.headline} className="orderBody">
                        <ul className="order-list">
                            <TapListComponent/>
                        </ul>


                    </div>
                    <div style={styles.slide}>
                        <ul className="order-list">
                        </ul>
                        <EmtryComponent>
                        </EmtryComponent> 
                    </div>
                    <div style={styles.slide}>
                        <ul className="order-list">
                        </ul>
                        <EmtryComponent>
                        </EmtryComponent>

                    </div>
                    <div style={styles.slide}>
                        <ul className="order-list">
                        </ul>
                        <EmtryComponent>
                        </EmtryComponent> 
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}