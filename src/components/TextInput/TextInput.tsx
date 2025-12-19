import React from 'react';
import type { TextInputProps } from '../../types';
// TextInput components
//renders a textarea and calls onTextChange on input change
export const TextInput: React.FC<TextInputProps> = ({
    onTextChange,
    placeholder= 'Start Typing...',
    initialValue = ''
}) => {
  return (
    <div className= 'w-full'>
      <textarea
        className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
  );
};