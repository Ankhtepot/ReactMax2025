import {useState} from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import {log} from './log.js';
import ConfigureCounter from "./components/ConfigureCounter.jsx";

function App() {
    log('<App /> rendered');

    const [chosenCount, setChosenCount] = useState(0);

    function handleSetCount(newCount) {
        // demonstration how to do state changes with guaranteed latest state
        setChosenCount(newCount);
        setChosenCount(oldState => oldState + 1);
    }

    return (
        <>
            <Header/>
            <main>
                <ConfigureCounter onSet={handleSetCount}/>
                {/* trick to update reset of child components when changes are seldom */}
                <Counter key={chosenCount} initialCount={chosenCount}/>
                <Counter initialCount={chosenCount}/>
            </main>
        </>
    );
}

export default App;
