import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField } from 'material-ui'
import { setUser } from '../../actions/user'
import './Home.css'

class Home extends Component {

    static propTypes = {
        userState: React.PropTypes.any
    }

    componentDidMount(){
        document.title = 'React App | Home'
    }

    _onChangeUsername = (e , value) =>{
        this.props.setUser(value)
    }

    render() {
        return (
            <div className="ink-grid">
                <div className="column-group vertical-gutters vertical">
                    <div className="all-100">
                        <div className="column">{this.props.userState.username}</div>
                        <br/>
                        <TextField
                            hintText="Hint Text"
                            floatingLabelText="Floating Label Text"
                            onChange={this._onChangeUsername}
                        />
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

function bindActions (dispatch) {
    return {
        setUser: (username) => dispatch(setUser(username))
    }
}

function mapStateToProps (state) {
    return {
        userState: state.user
    }
}


export default connect(mapStateToProps , bindActions)(Home) 