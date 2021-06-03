import React from 'react';
import './App.css';
import { useLocalStore, useObserver } from 'mobx-react';

type Note = {
  text: string;
  id : number;
};

type NotesContextObj = {
  textsList: Note[];
  addNote: (text: string) => void;
  removeNote: (id: number) => void;
};

const StoreContext = React.createContext<NotesContextObj>({
  textsList: [{text: '', id:0}],
  addNote: () => {},
  removeNote: () => {}
});

const StoreProvider = ({children} : any) => {
  const store = useLocalStore(()=>({
    textsList: [{text: 'my first note', id:1}],
    addNote: (text: string) => {
      let id = store.textsList[store.textsList.length-1].id + 1;
      store.textsList.push({text: text, id : id});
    },
    removeNote: (id: number) => {
      store.textsList = store.textsList.filter(note=>note.id != id);
    }
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

const NotesList = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {
      store.textsList.map(note => (
        <li key={note.text}>{note.text}
        <br/>
        <button onClick={
          e=>{
            store.removeNote(note.id);
          }
        }>Remove</button>
        <hr/>
        </li>
      ))}
    </ul>
  ));
};

const NotesForm = () => {
  const store = React.useContext(StoreContext);
  const [note, setBug] = React.useState("");

  return(
    <form onSubmit={e => {
        store.addNote(note);
        setBug('');
        e.preventDefault();
      }}>
      <input type="text" value={note} onChange={e => { setBug(e.target.value) }}></input>
      <button type="submit">Add</button>
    </form>
  )
}


function App() {
  return (
    <StoreProvider>
      <main>
        <NotesList/>
        <NotesForm/>
      </main>
    </StoreProvider>
  );
}

export default App;
