import React, { useState } from 'react';
import { addEntry } from '../redux/journalSlice';
import { useDispatch } from 'react-redux';
import '../App.css'

const JournalEntryForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addEntry(text));
            setText('');
        }
    };

    return (
        <div className="journal-form">
            <form onSubmit={handleSubmit}>
                <textarea value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your journal entry..." />
                <button type="submit">Submit</button>
            </form>
       </div>
    );

};

export default JournalEntryForm;