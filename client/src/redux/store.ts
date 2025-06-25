import { configureStore } from '@reduxjs/toolkit';
import journalReducer from './journalSlice';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('journal');
        if (serializedState == null) return undefined;
        return { journal: JSON.parse(serializedState) };
    } catch (err) {
        console.warn('Could not load state', err);
        return undefined;
    }
};

export const store = configureStore({
    reducer: {
        journal: journalReducer,
    },
    preloadedState: loadState(),
});

store.subscribe(() => {
    try {
        const state = store.getState();
        localStorage.setItem('journal', JSON.stringify(state.journal));
    } catch (err) {
        console.warn('Could not save state', err);
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
