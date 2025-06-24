import React from 'react';
import { useSelector } from 'react-redux';
import  EntryItem  from './EntryItem';
import type { Entry } from './EntryItem';
import '../App.css';

const EntryList = () => {
    const entries = useSelector((state: any) => state.journal.entries);
    return (
        <div className="entry-list">
            {entries.map((entry: Entry ) => (
                <EntryItem key={entry.id} entry={entry} />
            ))}
        </div>
    );
};

export default EntryList;