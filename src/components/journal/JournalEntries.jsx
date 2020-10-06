import React from 'react'
import JournalEntry from './JournalEntry';
import { useSelector } from 'react-redux';

export default function JournalEntries() {

const {notes} = useSelector(state => state.notes)


    return (
        <div className="journal__entries">
            {
                notes.map( note => (
                    <JournalEntry 
                        key={note.id} 
                        {...note}
                        />                
                ))
            }
            
        </div>
    )
}
