import React, { useState } from 'react';
import { addEntry, generateInsight } from '../redux/journalSlice';
import { useDispatch } from 'react-redux';
import '../App.css'
import type { AppDispatch } from '../redux/store';

const JournalEntryForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            const newEntryId = Date.now();
            dispatch(addEntry({ id: newEntryId, text }));
            dispatch(generateInsight(newEntryId));
            setText('');
        }
    };

    return (
        <div className='form-container'>
        <div className="journal-form">
            <form onSubmit={handleSubmit}>
                <textarea value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your journal entry..." />
                <button type="submit">Submit</button>
            </form>
       </div>
       </div>
    );
};

export default JournalEntryForm;