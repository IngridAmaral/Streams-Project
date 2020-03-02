import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm'


class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    handleSubmit = (formValues) => {
        console.log('form values',formValues)
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        //console.log('props',this.props)
        if(!this.props.stream) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                    initialValues={_.pick(this.props.stream, 'title', 'description')} 
                    submitProp={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, onwProps) => {
    //console.log('state', state, 'ownProps', onwProps)
    return { stream: state.streams[onwProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);