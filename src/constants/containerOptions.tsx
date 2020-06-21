import React from "react";
import ForumIcon from "@material-ui/icons/Forum";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import FeedbackIcon from "@material-ui/icons/Feedback";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import WordCard from "@/WordCard";
import SpeechBubbleTutor from "@/SpeechBubbleTutor";
import SpeechBubbleStudent from "@/SpeechBubbleStudent";
import SuggestionCard from "@/SuggestionCard";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const bubbleDataTutor = {
  profileImageUrl:
    "https://s3-ap-northeast-2.amazonaws.com/ringleimageassets/images/tutors/51918_low.jpeg",
  text:
    "And so you said everything is changed, which is perfect English way. You don't want me to talk about the grammar. Right. You just want me to write down the answers I looked on your",
  time: "11:35",
};

const bubbleDataStudent = {
  text:
    "Yeah, yeah, yeah, yeah. I want you to focus on the sentences that I can make it better later.",
  time: "12:05",
};

const suggestion = {
  text:
    "필러워드를 사용할 확률은 11% 입니다. 필러워드 사용 빈도가 적당합니다! 그래도 의식적으로 줄여보세요 :)",
  icon: <ThumbUpAltIcon />,
  feedback: {
    title: "링글의 제안이 정확하지 않은 것 같아요.",
    contents: <textarea></textarea>,
  },
  contents: { title: "자주 사용하는 단어", contents: <div>contents component!</div> },
};

export const chat = {
  icon: <ForumIcon />,
  title: "Recorded Script",
  description: (
    <span>
      수강생 분들 중, 수업 mp3 와 함께 Full Script 가 함께 제공되면 좋겠다는 의견을 많이 주셨어서,
      저희가 Zoom 의 API 를 사용하여 녹취록을 free- beta 로 제공해 드립니다.
      <br />
      해당 기능은 저희도 Zoom 기능을 무료로 활용하고 있기에, Zoom API 이슈 발생 시 Script 제공이
      지연 / 누락될 수 있음을 미리 안내 드립니다.
      <br />
      Script 서비스에 대한 수강생 분들의 피드백을 참고하여, 단순 Script 지원을 넘어 다양한 부가 기능
      제공이 가능한 Script & review 기능을 만드는 것이 링글 팀의 목표이며, 일정 수준 이상 고도화
      성공 시 해당 기능이 유료화 될 수 있음을 미리 공지 드립니다!
      <br />
      감사합니다!
      <br />
      <br />
      주의사항
      <br /> - 튜터와 내가 동시에 말할 때, 화자가 잘못 분리되는 경우가 있습니다.
      <br /> - 원어민 관점에서 영어 발음이 분석되기에, 일부 스크립트가 정확하지 않을 수 있습니다.
      튜터의 스크립트 변환 정도와 비교하여 나의 발음을 체크해보세요.
    </span>
  ),
  contents: (
    <div>
      <WordCard word="helloworldmynameisreesehelloworldmynameisreesehelloworldmynameisreesehelloworldmynameisreese" />
      <SpeechBubbleTutor data={bubbleDataTutor} />
      <SpeechBubbleStudent data={bubbleDataStudent} />
    </div>
  ),
};

export const suggestions = {
  icon: <BubbleChartIcon />,
  title: "Suggestions",
  description: (
    <span>
      내가 주로 말하는 단어에 대한 원어민 사용 빈도 수, 동의어 및 Filler Word 분석 데이터를
      제공합니다.Filler Word는 like, um과 같이 의미 없이 문장에서 사용되는 단어들을 말합니다.
      <br />
      주로 사용한 단어의 동의어를 확인하고, 다음 수업에서 활용해보세요.
      <br />
      Filler Word의 수치(%) 는 한 문장을 발화할 때, Filler word를 한번 이상 사용할 확률을
      의미합니다. 권장값은 약 30 % 내 입니다.
    </span>
  ),
  contents: (
    <>
      <SuggestionCard data={suggestion} />
      <SuggestionCard data={suggestion} />
    </>
  ),
};

export const feedback = {
  icon: <FeedbackIcon />,
  title: "Tutor's Feedback",
  description: (
    <span>
      튜터가 남긴 나의 영어 실력에 대한 평가 점수, 피드백 및 교정결과를 확인할 수 있습니다.평가
      점수를 바탕으로 IELTS, TOEIC SPEAKING, TOEFL 예상 점수도 확인할 수 있습니다.
    </span>
  ),
  contents: "",
};

export const chart = {
  icon: <EqualizerIcon />,
  title: "Summary Graph",
  description: (
    <span>
      수업 시간 동안 사용한 단어의 종류, 분당 말하기 속도를 확인할 수 있습니다.튜터와 비교하여,
      원어민 대비 나의 실력이 어느 정도인지 체크해보세요.
    </span>
  ),
  contents: "",
};
