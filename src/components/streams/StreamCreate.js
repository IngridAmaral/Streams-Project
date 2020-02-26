import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCeate extends React.Component {
    //renderInput = (formProps) => {
    renderInput = ({ input }) => { //destructured
        //console.log(formProps)
        
        // return (
        //     <input 
        //         onChange={formProps.input.onChange}
        //         value={formProps.input.value} 
        //     />
        // )  NEW SINTAX BELLOW

        //return <input {...formProps.input} />
        return <input {...input} /> //take all the key value pairs and add them as properties to the input element
    }
 
    render() {
        //console.log(this.props)
        return (
            <form>
                <Field name='title' component={this.renderInput} />
                <Field name='description' component={this.renderInput} />
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCeate);