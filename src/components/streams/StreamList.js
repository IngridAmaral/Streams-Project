import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
    componentDidMount() {
        const list = this.props.fetchStreams()
        console.log(list)
    }

    render() {
        return (
            <div>
                Stream List
            </div>
        )
    }
}

export default connect(null, { fetchStreams })(StreamList);