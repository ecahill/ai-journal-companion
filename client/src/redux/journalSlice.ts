import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Entry {
    id: number;
    text: string;
    aiInsight?: string;
}

interface JournalState {
    entries: Entry[];
}

const initialState: JournalState = {
    entries: [],
}

let nextId = 1;

const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        addEntry: (state, action: PayloadAction<string>) => {
            state.entries.unshift({
                id: nextId++,
                text: action.payload,
            });
        },
        setAIInsight: (state, action) => {
            const { id, aiInsight } = action.payload;
            const entry = state.entries.find(e => e.id === id);
            if (entry) entry.aiInsight = aiInsight;
        },
    },
});

export const { addEntry, setAIInsight } = journalSlice.actions;
export default journalSlice.reducer;