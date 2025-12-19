// props for TextInput 
export interface TextInputProps {
    onTextChange: (text: string) => void;
    placeholder?: string;
    initialValue?: string;
}
//stats used throughout components
export interface TextStats {
    characterCount: number;
    wordCount: number;
    readingTime: number;
}
// props for StatsDisplay
export interface StatsDisplayProps {
    stats: TextStats;
    showReadingTime?: boolean;
}
//props for CharacterCounter
export interface CharacterCounterProps {
    minWords?: number;
    maxWords?: number;
    targetReadingTime?: number;
}