import React from 'react';
import './App.css';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import { NewNotesInput } from './ClassComponents/NewNotesInput';
import { useRootStore } from './ClassComponents/RootStateContext';

function App() {

  const {notesStore} = useRootStore()
  debugger;

  return useObserver(()=>(
    <>
    <NewNotesInput addNote={notesStore.addNote}/>
    <hr/>
    <ul>
      {
        notesStore.notes.map((note)=>(
          <li key={note}>{note}</li>
        ))
      }
    </ul>
    <hr/>
    </>
  ));
}

export default App;
