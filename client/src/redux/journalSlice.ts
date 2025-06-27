import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchInsight } from '../api/insightApi';
import { RootState } from './store';

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

export const generateInsight = createAsyncThunk(
    'journal/generateInsight',
    async (entryId: number, { getState, dispatch }) => {
        const state = getState() as RootState;
        const entry = state.journal.entries.find(e => e.id === entryId);
        if (!entry) {
            return;
        }

        const aiInsight = await fetchInsight(entry.text);
        dispatch(setAiInsight({ entryId: entryId, aiInsight: aiInsight }));
    }
);

const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        addEntry: (state, action: PayloadAction<{ id: number, text: string }>) => {
            state.entries.unshift({
                id: action.payload.id,
                text: action.payload.text,
            });
        },
        setAiInsight: (state, action) => {
            const { entryId, aiInsight } = action.payload;
            const entry = state.entries.find(e => e.id === entryId);
            if (entry) entry.aiInsight = aiInsight;
        },
        deleteEntry: (state, action) => {
            state.entries = state.entries.filter(entry => entry.id !== action.payload);
        },
    },
});

export const { addEntry, setAiInsight, deleteEntry } = journalSlice.actions;
export default journalSlice.reducer;