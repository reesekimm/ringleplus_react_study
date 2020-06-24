import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Container from "@/common/Container";
import FeedbackIcon from "@material-ui/icons/Feedback";

type Payload = {
  [key: string]: object;
};

type ReviewData = {
  loading: string;
  payload: Payload;
};

type FeedbackProps = {
  review: ReviewData;
};

const Feedback: React.FC<FeedbackProps> = ({ review }) => {
  const feedbackData = review;

  console.log(feedbackData);

  const feedbackObj = {
    icon: <FeedbackIcon />,
    title: "Tutor's Feedback",
    description: (
      <span>
        튜터가 남긴 나의 영어 실력에 대한 평가 점수, 피드백 및 교정결과를 확인할 수 있습니다.평가
        점수를 바탕으로 IELTS, TOEIC SPEAKING, TOEFL 예상 점수도 확인할 수 있습니다.
      </span>
    ),
    contents: <div>hello</div>,
  };

  return (
    <Grid item>
      <Container options={feedbackObj} />
    </Grid>
  );
};

const mapStateToProps = (state: any) => ({
  review: state.review.payload,
});

export default connect(mapStateToProps, null)(Feedback);
