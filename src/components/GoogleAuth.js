import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '982973852013-eklqlb3imeum0r5mmia7bndsg5ad612e.apps.googleusercontent.com'
            })
        })
    }
    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}

export default GoogleAuth;