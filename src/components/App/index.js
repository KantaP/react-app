import React , { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Page from '../Page'
import '../../assets/ink/css/ink-flex.css'
import * as MaterialUI from 'material-ui'

class App extends Component {

    static propTypes = {
        children: PropTypes.any
    }

    state = {
        drawer: false
    }

    _toggleDrawer = () =>{
        this.setState({drawer: !this.state.drawer}) 
    }

    render(){
        return(
            <div>
                <MaterialUI.AppBar onLeftIconButtonTouchTap={this._toggleDrawer} />
                <Page children={this.props.children} />
                <MaterialUI.Drawer open={this.state.drawer}>
                    <Link to="/"><MaterialUI.MenuItem>Home</MaterialUI.MenuItem></Link>
                    <Link to="about"><MaterialUI.MenuItem>About</MaterialUI.MenuItem></Link>
                    <MaterialUI.MenuItem onTouchTap={this._toggleDrawer}>Close</MaterialUI.MenuItem>
                </MaterialUI.Drawer>
            </div>
        )
    }
}

export default connect(null , null)(App)
