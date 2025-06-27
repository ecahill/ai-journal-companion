import React from 'react';
import '../App.css';

type Entry = {
    id: number;
    text: string;
    aiInsight?: string;
};

interface EntryItemProps {
    entry: Entry;
}

const EntryItem: React.FC<EntryItemProps & { onDelete: (id: number) => void }> = ({ entry, onDelete }) => (
    <div className='entry-card'>
        <div className="entry-item">
            <p><strong>Your Entry:</strong> {entry.text}</p>
            {entry.aiInsight ? (
                <p><strong>AI Insight:</strong> {entry.aiInsight}</p>
            ) : (
                <p>Loading AI Response...</p>
            )}
            <button className="delete-button" onClick={() => onDelete(entry.id)}>Delete</button>
        </div>
    </div>
);

export default EntryItem;
export type { Entry };