import React , { PropTypes , Component } from 'react'
import { connect } from 'react-redux'

class Page extends Component {
    propTypes: {
        children: PropTypes.any
    }

    render(){
        return (
            <div style={{ marginTop: '1.5em' }}  className="ink-grid">
                <div className="column-group push-center">
                    <div className="all-100">
                        {this.props.children}
                    </div>
                </div> 
            </div>
        )
    }
}

export default connect(null ,null)(Page)