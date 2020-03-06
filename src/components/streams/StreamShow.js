import React from 'react';
import history from '../../history';
import { Link } from 'react-router-dom';
import flv from 'flv.js'
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }

        const { title, description } = this.props.stream
        
        return (
            <div>
                <video ref={this.videoRef} style={{width: '100%' }} controls={true} />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, onwProps) => {
    return { stream: state.streams[onwProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);