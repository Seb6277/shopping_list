import React from 'react';
import './App.css';
import ItemList from './components/ItemList'
import About from './components/About'
import NavigationBar from './components/NavigationBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    const routes = [
        {
            path: "/",
            component: ItemList
        },
        {
            path: "/about",
            component: About
        }
    ];

    return (
        <div className="App">
            <NavigationBar/>
            <Router>
                <Switch>
                    <Route exact path='/' component={ItemList} />
                    <Route path='/about' render={props => <About {...props} />}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
