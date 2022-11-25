import React, { useState } from 'react';
import DisplayEnteries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntryForm/AddEntryForm';


function App(){
    
    const [entries, setEntries] = useState([{weight:178, date: "11-24-2022"}])

    function addNewEntry(entry){
        let tempEntries = [...entries, entry];
        setEntries(tempEntries)
    }


    return (
    <div>
        <DisplayEnteries parentEntries={entries}/>
        <AddEntryForm addNewEntry={addNewEntry}/>

    </div>
    );
}

export default App;