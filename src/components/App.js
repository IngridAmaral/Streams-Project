import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';



class App extends React.Component {
    PageOne = () => {
        return <div>Page One</div>
    };
    
    PageTwo = () => {
        return <div>Page Two</div>
    };
    
    
    render () {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={this.PageOne} />
                        <Route path='/pagetwo' exact component={this.PageTwo} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;