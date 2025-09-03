import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number; // milliseconds per character
  className?: string;
}

export const TypingText = ({ text, speed = 150, className }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [text, index, speed]);

  return <span className={className}>{displayedText}</span>;
};