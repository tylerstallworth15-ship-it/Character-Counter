import React, { useState } from 'react';
import { CharacterCounterProps, TextStats } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = 0,
  targetReadingTime = 0
}) => {
  const [text, setText] = useState('');

  const calculateStats = (input: string): TextStats => {
    const characterCount = input.length;
    const wordCount = input.trim() === '' ? 0 : input.trim().split(/\s+/).length;
    const readingTime = wordCount / 200;
    return { characterCount, wordCount, readingTime };
  };

  const stats = calculateStats(text);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <TextInput onTextChange={setText} />
      <StatsDisplay stats={stats} />
      <div className="mt-4 text-sm text-gray-600">
        min: {minWords} | Max: {maxWords}
      </div>
    </div>
  );
};