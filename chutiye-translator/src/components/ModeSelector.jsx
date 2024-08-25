// src/components/ModeSelector.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../features/translation/translationSlice';

const ModeSelector = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.translation.mode);

  const handleModeChange = (e) => {
    dispatch(setMode(e.target.value));
  };

  return (
    <div>
      <h3>Select Translation Mode:</h3>
      <select value={mode} onChange={handleModeChange}>
        <option value="light">Light Roast</option>
        <option value="moderate">Moderate Roast</option>
        <option value="hard">Hard Roast</option>
      </select>
    </div>
  );
};

export default ModeSelector;
