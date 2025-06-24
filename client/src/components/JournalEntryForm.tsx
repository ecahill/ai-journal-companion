import React, { useState } from 'react';
import { addEntry } from '../redux/journalSlice';
import { useDispatch } from 'react-redux';

const JournalEntryForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addEntry(text));
        setText('');
    };

    return (
        <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={handleSubmit}>Submit Entry</button>
        </div>
    );

};

export default JournalEntryForm;