import React, { useState } from "react";
import './App.css';


// a component only for button
function Button(props) {
    const style_items = { fontSize: 'xx-large', borderRadius: '10px', margin: '10px', width: '80px', height: '60px' };
    return (
        <button style={style_items} onClick={() => props.on_click_fuction(props.increamental_size)}>
            {props.increamental_size}
        </button>
    );
}

// a component only for display the number of clicks
function Display(props) {
    return (
        <div>
            Number of Clicks: {props.message}
        </div>
    )
}

// a component for App which calls other components
function App() {
    const [counter, set_counter] = useState(0); // using hook
    const increase_counter = (increamental_size) => { set_counter(counter + increamental_size) };

    return (
        <div className="App">
            <header className="App-header">
                <Display message={counter} /> <br />
                <Button on_click_fuction={increase_counter} increamental_size={1} />
                <Button on_click_fuction={increase_counter} increamental_size={-1} />
            </header>
        </div>
    );

}
export default App;