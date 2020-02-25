import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null,
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '982973852013-eklqlb3imeum0r5mmia7bndsg5ad612e.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.handleAuthChange);
            })
        })
    }

    handleAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }    
        //this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    handleSignInClick = () => {
        this.auth.signIn();
    }

    handleSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton = () => {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.handleSignOutClick} className='ui red google button'>
                    <i className='google icon' />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.handleSignInClick} className='ui red google button'>
                    <i className='google icon' />
                    Sign In With Google
                </button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default connect(null, { signIn, signOut })(GoogleAuth);