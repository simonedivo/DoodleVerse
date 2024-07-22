import React, {useState} from 'react';
import promptList from '../../resources/prompts';
import _ from 'lodash';

function Home() {
    let [dailyRandomPrompt, setDailyRandomPrompt] = useState(_.sample(promptList));
    let [newRandomPrompt, setNewRandomPrompt] = useState(_.sample(promptList));

    function handleDailyPrompt() {
        setDailyRandomPrompt(_.sample(promptList));
    }
    
    function handleNewPrompt() {
        setNewRandomPrompt(_.sample(promptList));
    }

    return (
        <div>
            <h1>Home</h1>
            <p>{dailyRandomPrompt}</p>
            <p>{newRandomPrompt}</p>
            <button onClick={handleNewPrompt}>New Prompt</button>
        </div>
    );
}

export default Home;