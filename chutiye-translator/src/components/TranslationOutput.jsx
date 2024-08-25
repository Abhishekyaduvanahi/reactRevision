// src/components/TranslationOutput.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const TranslationOutput = () => {
  const translatedText = useSelector((state) => state.translation.translatedText);

  return (
    <div>
      <h3>Translated Text:</h3>
      <p>{translatedText}</p>
    </div>
  );
};

export default TranslationOutput;
