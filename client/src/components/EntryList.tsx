import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  EntryItem  from './EntryItem';
import type { Entry } from './EntryItem';
import { deleteEntry } from '../redux/journalSlice';
import '../App.css';

const EntryList = () => {
    const entries = useSelector((state: any) => state.journal.entries);

    const dispatch = useDispatch();
    const handleDelete = (id: number) => dispatch(deleteEntry(id));
    
    return (
        <div className="entry-list">
            {entries.map((entry: Entry ) => (
                <EntryItem key={entry.id} entry={entry} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default EntryList;