import React from "react";

interface WordCardProps {
  word: string;
}

const WordCard: React.FC<WordCardProps> = ({ word }) => (
  <div className="word-card__wrapper">{word}</div>
);

export default WordCard;
