import React, { Component } from 'react'
import { connect } from 'react-redux'


class About extends Component {

    componentDidMount(){
        document.title = 'React App | About'
    }

    render() {
        return (
            <div>About</div>   
        )
    }
}

export default connect(null, null)(About)  