import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
    
    renderInput = ({ input, label }) => { //destructured
        return (
            <div className='field'>
                <label>{label}</label>
                <input {...input} />
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
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className='ui form'>
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

export default reduxForm({
    form: 'streamCreate'
})(StreamCeate);