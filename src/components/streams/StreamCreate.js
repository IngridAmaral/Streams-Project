import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCeate extends React.Component {
        
    //   renderInput = (formProps) => {
    //         console.log(formProps)         
    //         return (
    //             <input 
    //                 onChange={formProps.input.onChange}
    //                 value={formProps.input.value} 
    //             />
    //         )    
    //         return <input {...formProps.input} /> //take all the key value pairs and add them as properties to the input element
    //     } NEW SINTAX BELLOW
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div  className='header'>
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => { //destructured
        console.log(meta)
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                {this.renderError(meta)}
            </div>
        ) 
    }

    handleSubmit = (formValues) => {
        //e.preventDefault(); no need to call it anymore
        console.log(formValues)
    }
 
    render() {
        //console.log(this.props)
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.handleSubmit)} 
                className='ui form error'>
                <Field 
                    name='title' 
                    component={this.renderInput} 
                    label='Enter Title' />
                <Field 
                    name='description' 
                    component={this.renderInput} 
                    label='Enter Description' />
                <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = 'You must enter a title!';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description!';
    }

    return errors;
};

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCeate);

export default connect()(formWrapped)