import React,{Component} from 'react'
import { connect } from 'react-redux';
import {actions} from "./HomeRedux";
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom'

@connect(state => {
    return {
        detailInfo: state.rootReducer,
    };
}, {
    push,
    ...actions,
})
class GamePage extends Component {
    render() {
        return (
            <h1>GamePage</h1>
        )
    }
}
export default GamePage