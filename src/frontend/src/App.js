import React from 'react';
import './App.css';
import SpeechRecorder from './components/SpeechRecorder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SpeakAI</h1>
        <p>Improve your English pronunciation with AI</p>
      </header>
      <main className="App-main">
        <SpeechRecorder />
      </main>
      <footer className="App-footer">
        <p>Practice speaking and get instant feedback</p>
      </footer>
    </div>
  );
}

export default App;
