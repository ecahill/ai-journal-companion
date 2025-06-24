import React from 'react';
import logo from './logo.svg';
import './App.css';
import JournalEntryForm from './components/JournalEntryForm';
import EntryList from './components/EntryList';

const App = () => {
  return (
    <div className="app-container">
      <h1>AI Journal Companion</h1>
      <JournalEntryForm />
      <hr />
      <EntryList />
    </div>
  );
}

export default App;
