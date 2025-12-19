import React from 'react';
import type { StatsDisplayProps } from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, showReadingTime = true }) => {
    return (
        <div className="mt-4 space-y-2">
          <div>
            <strong>Characters:</strong> {stats.characterCount}
        </div>
        <div>
            <strong>Words: </strong> {stats.wordCount}
        </div>
        {showReadingTime && (
          <div>
            <strong>Reading Time:</strong> {stats.readingTime.toFixed(2)} minutes
          </div>
        )}
        </div>
    );
};