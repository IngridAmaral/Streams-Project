import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.fetchStream(this.props.match.params.id)
    }
    
    // handleDelete = () => {
    //     this.props.deleteStream(this.props.match.params.id)
    // }

    renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={this.handleDelete} className='ui button negative'>Delete</button>
                <button className='ui button'>Cancel</button>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div>
                Stream Delete
                <Modal
                    title='Delete Stream'
                    content='Are you sure you want to delete this stream?'
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')} />
            </div>
        )
    }
}



// const mapStateToProps = (state, onwProps) => {
//     console.log(state, onwProps)
//     return { stream: state.streams[onwProps.match.params.id]}
// }

export default connect(null, {fetchStream, deleteStream})(StreamDelete);