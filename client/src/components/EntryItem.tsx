import React from 'react'

type Entry = {
    id: number;
    text: string;
    aiInsight?: string;
};

interface EntryItemProps {
    entry: Entry;
}

const EntryItem: React.FC<EntryItemProps> = ({ entry }) => (
    <div>
        <p><strong>Your Entry:</strong> {entry.text}</p>
        {entry.aiInsight ? (
            <p><strong>AI Insight:</strong> {entry.aiInsight}</p>
        ) : (
            <p>Loading AI Response...</p>
        )}
    </div>
);

export default EntryItem;
export type { Entry };