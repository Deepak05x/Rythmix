import React from 'react';
import { AccessProvider } from './Contexts/AcessContext';
import DisplayContainer from './Containers/DisplayContainer';

function App() {
    return (
        <div className="App">
            <AccessProvider>
                <DisplayContainer />
            </AccessProvider>
        </div>
    );
}

export default App;
