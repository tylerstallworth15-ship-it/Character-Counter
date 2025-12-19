import React, { useState } from 'react';
import type { CharacterCounterProps } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = Infinity,
  targetReadingTime
}) => {
    const [text, setText] = useState('');

    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const characterCount = text.length;
    const readingTime = Math.ceil(wordCount / 200);

    return (
    <div className="p-6 max-w-xl mx-auto">
      <TextInput onTextChange={setText} />
      <StatsDisplay 
       stats={{ characterCount, wordCount, readingTime }}
        showReadingTime={true} 
      />
      {targetReadingTime && (
        <p className="mt-2 text-sm text-gray-600">
        Target reading time: {targetReadingTime} minute(s)
        </p>
      )}
    </div>
  );
};