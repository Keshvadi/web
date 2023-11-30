import React, { useState } from 'react';
import './App.css';

function ClickCounter() {
    const [counter, set_counter] = useState(0);
    const handle_click = () => set_counter(counter+1);
    return (
        <div>
            <button style={{color:'red', fontSize:'xx-large', padding:'5px 10px', borderRadius:'5px'}} onClick={handle_click}>
                {counter}
            </button>
        </div>
    );
}

export default ClickCounter;