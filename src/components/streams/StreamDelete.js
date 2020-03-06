import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends React.Component {
    componentDidMount() {
        //console.log(this.props)
        this.props.fetchStream(this.props.match.params.id)
    }

    handleDelete = () => {
        this.props.deleteStream(this.props.match.params.id)
    }

    renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={this.handleDelete} className='ui button negative'>Delete</button>
                <Link to='/' className='ui button'>Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent = () => {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
    }

    render() {
        console.log(this.props.match.params.id)
        return (
            <Modal
                title='Delete Stream'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')} />
        )
    }
}



const mapStateToProps = (state, onwProps) => {
    console.log(state, onwProps)
    return { stream: state.streams[onwProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);