import React from "react";
import { connect } from "react-redux";
import Container from "@/common/Container";
import SuggestionCard from "@/common/SuggestionCard";
import WordCard from "@/common/WordCard";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";

type Top50 = (string | number)[];

const Suggestions: React.FC = ({ review }: any) => {
  const freqUsedWords = {
    text: review && review[1].message,
    icon: <ThumbUpAltIcon />,
    feedback: {
      title: "링글의 제안이 정확하지 않은 것 같아요.",
      contents: <textarea></textarea>,
    },
    contents: {
      title: "자주 사용하는 단어",
      contents: review ? (
        <ul>
          {review[1].list_top_50.map(([word, count]: Top50) => (
            <li key={word} className="top50__item">
              <span>{word}</span>
              <span>{count}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div></div>
      ),
    },
  };

  const fillerWord = {
    text:
      review &&
      `필러워드를 사용할 확률은 ${Math.floor(review[1].filler_word_percent)}% 입니다. ${
        review[1].filler_word_message
      }`,
    icon: <ThumbUpAltIcon />,
    feedback: {
      title: "링글의 제안이 정확하지 않은 것 같아요.",
      contents: <textarea></textarea>,
    },
  };

  const synonymList = {
    text: review && `${review[1].message} ${review[1].sub_message}`,
    icon: <ThumbUpAltIcon />,
    feedback: {
      title: "링글의 제안이 정확하지 않은 것 같아요.",
      contents: <textarea></textarea>,
    },
    contents: {
      title: "동의어 리스트 확인",
      contents: (
        <div>
          {review &&
            review[1].synonym_list.map(({ voca_record, synonyms }: any) => (
              <ExpansionPanel
                key={voca_record.id}
                style={{
                  boxShadow: "none",
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon fontSize="small" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span>{voca_record.word}</span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div>
                    {synonyms.map(({ id, word }: any) => (
                      <WordCard key={id} word={word} />
                    ))}
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
        </div>
      ),
    },
  };

  const suggestions = {
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
        <SuggestionCard data={freqUsedWords} />
        <SuggestionCard data={fillerWord} />
        <SuggestionCard data={synonymList} />
      </>
    ),
  };

  return <Container options={suggestions} />;
};

const mapStateToProps = (state: any) => ({
  review: state.review.payload,
});

export default connect(mapStateToProps, null)(Suggestions);
