import React from "react";

interface Data {
  profileImageUrl: string;
  text: string;
  time: string;
}

interface BubbleProps {
  data: Data;
}

const SpeechBubbleTutor: React.FC<BubbleProps> = ({ data: { profileImageUrl, text, time } }) => (
  <div className="speech-bubble__wrapper">
    <img className="speech-bubble__img" src={profileImageUrl} alt="Tutor's profile image" />
    <div className="speech-bubble__text tutor">{text}</div>
    <div className="speech-bubble__time">{time}</div>
  </div>
);

export default SpeechBubbleTutor;
