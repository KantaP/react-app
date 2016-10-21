import React , { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Page from '../Page'
import '../../assets/ink/css/ink-flex.css'
import * as MaterialUI from 'material-ui'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            drawer: false
        }
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
                    <MaterialUI.MenuItem><Link to="/">Home</Link></MaterialUI.MenuItem>
                    <MaterialUI.MenuItem><Link to="about">About</Link></MaterialUI.MenuItem>
                    <MaterialUI.MenuItem onTouchTap={this._toggleDrawer}>Close</MaterialUI.MenuItem>
                </MaterialUI.Drawer>
            </div>
        )
    }
}

export default connect(null , null)(App)
