// src/components/TextInput.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../features/translation/translationSlice';

const TextInput = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.translation.text);

  const handleChange = (e) => {
    dispatch(setText(e.target.value));
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something to translate..."
      />
    </div>
  );
};

export default TextInput;
