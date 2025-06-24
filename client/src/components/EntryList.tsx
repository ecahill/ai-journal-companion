import React from 'react';
import { useSelector } from 'react-redux';
import  EntryItem  from './EntryItem';
import type { Entry } from './EntryItem';

const EntryList = () => {
    const entries = useSelector((state: any) => state.journal.entries);
    return (
        <div>
            {entries.map((entry: Entry ) => (
                <EntryItem key={entry.id} entry={entry} />
            ))}
        </div>
    );
};

export default EntryList;