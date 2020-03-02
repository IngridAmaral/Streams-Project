import React from 'react';
import { connect } from 'react-redux';

class StreamEdit extends React.Component {
    render() {
        console.log('props',this.props)
        return (
            <div>
                Stream Edit
            </div>
        )
    }
}

const mapStateToProps = (state, onwProps) => {
    //console.log('state', state, 'ownProps', onwProps)
    return { stream: state.streams[onwProps.match.params.id]}
}

export default connect(mapStateToProps)(StreamEdit);