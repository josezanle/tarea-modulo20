import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export default function JournalEntry({id,date,title,body,url}) {

    const noteDate = moment(date);
    const dispatch = useDispatch()

const handleEntryClick = () =>{
    dispatch(
        activeNote(id,{
            date,
            title,
            body,
            url
        })
    )
}
    return (



        <div 
            className="journal__entry pointer animate__animated animate__fadeIn"
            onClick={handleEntryClick}
        >
            
            {
                url &&
                <div
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition:'center',
                        backgroundImage: `url(${url})`
                    }}
                ></div>
            }
            <div className="journal__entry-body">
        <h4 className="journal__entry-title">{title}</h4>

        <p className="journal__entry-content">{body}</p>
            </div>

            <div className="journal__entry-date-box">
        <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>



            
        </div>
    )
}
