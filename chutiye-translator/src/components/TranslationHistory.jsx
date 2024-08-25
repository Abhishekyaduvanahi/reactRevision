// src/components/TranslationHistory.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearHistory } from '../features/translation/translationSlice';

const TranslationHistory = () => {
  const history = useSelector((state) => state.translation.history);
  const dispatch = useDispatch();

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <div>
      <h3>Translation History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClearHistory}>Clear History</button>
    </div>
  );
};

export default TranslationHistory;
