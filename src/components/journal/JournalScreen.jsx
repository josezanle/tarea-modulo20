import React from 'react';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import NothingSelected from './NothingSelected';
import { NotesScreen } from '../notes/NotesScreen';

const JournalScreen = () => {

    const {active} = useSelector(state => state.notes)
    return (
        <div className="journal__main-content animate__animated animate__fadeLeft">

              <Sidebar/>

              <main>
                    {
                        (active)
                        ?(<NotesScreen />)
                        :(<NothingSelected />)
                    }
              </main>
          </div>
    );
}

export default JournalScreen;
