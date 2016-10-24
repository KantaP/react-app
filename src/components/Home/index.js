import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Home.css'

class Home extends Component {

    static propTypes = {
        userState: React.PropTypes.any
    } 

    render() {
        return (
            <div className="ink-grid">
                <div className="column-group vertical-gutters vertical">
                    <div className="all-100">
                        <div className="column">{this.props.userState.username}</div>
                    </div>
                    <div className="all-100">
                        <div className="column">column 2</div>
                    </div>
                    <div className="all-100">
                        <div className="column">column 3</div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default connect((state) => ({userState: state.user}) , null)(Home) 