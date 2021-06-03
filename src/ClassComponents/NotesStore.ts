import React from 'react';
import { useLocalStore, useObserver } from 'mobx-react';
import { action, observable } from 'mobx';


export class NotesStore{
    @observable notes : string[] = ["temp"];

    @action
    addNote = (note: string) =>{
        debugger;
        // let id = this.notes[this.notes.length-1].id + 1;
        this.notes.push(note)
    }
}
