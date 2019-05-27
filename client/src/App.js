import React from 'react';
import './App.css';
import ItemList from './components/ItemList'
import NavigationBar from './components/NavigationBar'

function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <ItemList/>
        </div>
    );
}

export default App;
