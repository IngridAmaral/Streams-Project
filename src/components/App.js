import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';



class App extends React.Component {
    PageOne = () => {
        return (<div>Page One
            <Link to='/pagetwo'>Navitage to page two</Link>
        </div>)
    };
    
    PageTwo = () => {
        return  (<div>Page Two
            <Link to='/'>Page one</Link>
        </div>)
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