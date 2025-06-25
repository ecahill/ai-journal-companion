import journalReducer, { addEntry, deleteEntry, setAiInsight } from '../journalSlice';

describe('journalSlice reducer', () => {
    it('should return the initial state', () => {
        expect(journalReducer(undefined, { type: 'unknown' })).toEqual({ entries: [] });
    });
    
    it('should handle addEntry', () => {
        const initialState = { entries: [] };
        const newEntry = { id: 1, text: 'Test entry' };
        const result = journalReducer(initialState, addEntry(newEntry));
        expect(result.entries).toHaveLength(1);
        expect(result.entries[0]).toEqual(newEntry);
    });

    it('should handle deleteEntry', () => {
        const initialState = { entries: [{ id: 1, text: 'Test entry' }] };
        const result = journalReducer(initialState, deleteEntry(1));
        expect(result.entries).toHaveLength(0);
    });

    it('should handle setAiInsight', () => {
        const initialState = { entries: [{ id: 1, text: 'Test entry' }] };
        const result = journalReducer(initialState, setAiInsight({ entryId: 1, aiInsight: 'Insight text' }));
        expect(result.entries[0].aiInsight).toBe('Insight text');
    });
});
