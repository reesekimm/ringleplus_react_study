import React from "react";

interface Data {
  text: string;
  time: string;
}

interface BubbleProps {
  data: Data;
}

const SpeechBubbleStudent: React.FC<BubbleProps> = ({ data: { text, time } }) => (
  <div className="speech-bubble__wrapper">
    <div className="speech-bubble__time">{time}</div>
    <div className="speech-bubble__text student">{text}</div>
  </div>
);

export default SpeechBubbleStudent;
