import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Container from "@/common/Container";
import FeedbackIcon from "@material-ui/icons/Feedback";

type Score = {
  score_type: string;
  score: string;
  max_score: string;
};

const Feedback: React.FC = ({ review }: any) => {
  const feedbackObj = {
    icon: <FeedbackIcon />,
    title: "Tutor's Feedback",
    description: (
      <span>
        튜터가 남긴 나의 영어 실력에 대한 평가 점수, 피드백 및 교정결과를 확인할 수 있습니다.평가
        점수를 바탕으로 IELTS, TOEIC SPEAKING, TOEFL 예상 점수도 확인할 수 있습니다.
      </span>
    ),
    contents: review ? (
      <div>
        <div className="feedback__comment">{review[2].score_result[0].overall_comment}</div>
        <table className="feedback__score-table">
          <tbody>
            {review[2].score_result.slice(1).map(({ score_type, score, max_score }: Score) => (
              <tr key={score_type}>
                <td className="score-type">{score_type}</td>
                <td>
                  <span>{score}</span>
                  {max_score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      ""
    ),
  };

  return <Grid item>{review && review[2] && <Container options={feedbackObj} />}</Grid>;
};

const mapStateToProps = (state: any) => ({
  review: state.review.payload,
});

export default connect(mapStateToProps, null)(Feedback);
