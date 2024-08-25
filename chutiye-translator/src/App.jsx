// src/App.jsx
import React from 'react';
import TextInput from './components/TextInput';
import TranslationOutput from './components/TranslationOutput';
import TranslationHistory from './components/TranslationHistory';
import ModeSelector from './components/ModeSelector';

function App() {
  return (
    <div className="App">
      <h1>Chutiye Translator</h1>
      <ModeSelector />
      <TextInput />
      <TranslationOutput />
     {/* <TranslationHistory /> */}
    </div>
  );
}

export default App;
