import React from 'react';
import './App.css';
import ItemList from './components/ItemList'
import About from './components/About'
import NavigationBar from './components/NavigationBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {createStore} from "redux"
import listedStoreItems from './Reducers/ItemReducer'
import {Provider} from "react-redux";

let store = createStore(listedStoreItems)

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <NavigationBar/>
                <Router>
                    <Switch>
                        <Route exact path='/' component={ItemList} />
                        <Route path='/about' render={props => <About {...props} />}/>
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
