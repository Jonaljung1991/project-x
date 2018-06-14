import React, {Component} from 'react';
import './App.css';
import Nutrition from "./main-categories/nutrition/nutrition.js";
import Strength from "./main-categories/strength/strength.js";
import Brain from "./main-categories/brain/brain.js";
import X from "./main-categories/x/x.js";

class App extends Component {
    render() {
        return (<div className="App">
            <h1>Project-x</h1>
            <div className="main-categories-container">
                <div>
                    <Nutrition/>
                    <Strength/>
                </div>
                <div>
                    <Brain/>
                    <X/>
                </div>
            </div>
        </div>);
    }
}

export default App;
