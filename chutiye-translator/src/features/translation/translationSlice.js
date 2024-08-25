// src/features/translation/translationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
  translatedText: '',
  history: [],
  mode: 'light', // Modes: 'light', 'moderate', 'hard'
};

const translationDictionary = {
  light: {
    hello: "hey",
    world: "earth",
    fuck:"fuck"
  },
  moderate: {
    hello: "yo",
    world: "globe",
    fuck:"Gand Maar dunga bsdk"
  },
  hard: {
    hello: "sup",
    world: "mudball",
    fuck:"Teri biwi mujhse gaand marvaye"
  },
  
};

const translateText = (text, mode) => {
  const words = text.toLowerCase().split(' ');
  return words.map((word) => translationDictionary[mode][word] || word).join(' ');
};

const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
      state.translatedText = translateText(action.payload, state.mode);
      state.history.push(action.payload);
    },
    setTranslatedText: (state, action) => {
      state.translatedText = action.payload;
    },
    addToHistory: (state, action) => {
      state.history.push(action.payload);
    },
    clearHistory: (state) => {
      state.history = [];
    },
    setMode: (state, action) => {
      state.mode = action.payload;
      state.translatedText = translateText(state.text, state.mode);
    },
  },
});

export const {
  setText,
  setTranslatedText,
  addToHistory,
  clearHistory,
  setMode,
} = translationSlice.actions;

export default translationSlice.reducer;
