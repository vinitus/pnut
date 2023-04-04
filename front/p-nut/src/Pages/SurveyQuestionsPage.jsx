import React, { useState, useEffect, useMemo, createRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { symptomsQuestionAPI } from "../api/symptomsQuestionAPI";
import axiosInterface from "../api/axiosInterface";

const SurveyQuestionsPage = () => {
  const navigate = useNavigate();
  const { question1, question2, question3 } = useParams();
  const token = useSelector((state) => state.auth.authentication.token);
  const [inputRef, setInputRef] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  const questionObj = useMemo(() => {
    const [questionId1, question1Thema] = question1.split("=");
    const [questionId2, question2Thema] = question2.split("=");
    const [questionId3, question3Thema] = question3.split("=");
    return {
      questionId1,
      questionId2,
      questionId3,
      questionThema: [question1Thema, question2Thema, question3Thema],
    };
  }, [question1, question2, question3]);

  const [question1Data, setQuestion1Data] = useState();
  const [question2Data, setQuestion2Data] = useState();
  const [question3Data, setQuestion3Data] = useState();
  const [nickname, setNickname] = useState();

  useEffect(() => {
    symptomsQuestionAPI(
      token,
      Number(questionObj.questionId1) + 1,
      Number(questionObj.questionId2) + 1,
      Number(questionObj.questionId3) + 1
    ).then((res) => {
      const [question1Data, question2Data, question3Data] = res;
      setNickname(question1Data[0]);
      setQuestion1Data(question1Data.slice(1));
      setInputRef((prev) => {
        const refArr = [];
        for (let i = 1; i < question1Data.length; i += 1) {
          refArr.push(createRef(null));
        }
        prev.push(refArr);
        return [...prev];
      });
      setInputValue((prev) => {
        const refArr = [];
        for (let i = 1; i < question1Data.length; i += 1) {
          refArr.push(0);
        }
        prev.push(refArr);
        return [...prev];
      });
      setQuestion2Data(question2Data.slice(1));
      setInputRef((prev) => {
        const refArr = [];
        for (let i = 1; i < question2Data.length; i += 1) {
          refArr.push(createRef(null));
        }
        prev.push(refArr);
        return [...prev];
      });
      setInputValue((prev) => {
        const refArr = [];
        for (let i = 1; i < question2Data.length; i += 1) {
          refArr.push(0);
        }
        prev.push(refArr);
        return [...prev];
      });
      setQuestion3Data(question3Data.slice(1));
      setInputRef((prev) => {
        const refArr = [];
        for (let i = 1; i < question3Data.length; i += 1) {
          refArr.push(createRef(null));
        }
        prev.push(refArr);
        return [...prev];
      });
      setInputValue((prev) => {
        const refArr = [];
        for (let i = 1; i < question3Data.length; i += 1) {
          refArr.push(0);
        }
        prev.push(refArr);
        return [...prev];
      });
    });
  }, [questionObj, token]);

  // 변경 고
  const inputChangeHandler = (e) => {
    const [tag, y, x] = e.target.id.split("-");
    inputValue[y][x] = Number(e.target.value);
  };

  // 요청 고
  const submitBtnClickHandler = () => {
    console.log(inputValue[0]);
    const req1 = axiosInterface(
      "POST",
      `/survey/${Number(questionObj.questionId1) + 1}`,
      {
        responses: inputValue[0],
      },
      {
        Authorization: `Bearer ${token}`,
      }
    ).then((res) => {
      console.log(res);
      return res;
    });

    const req2 = axiosInterface(
      "POST",
      `/survey/${Number(questionObj.questionId2) + 1}`,
      {
        responses: inputValue[1],
      },
      {
        Authorization: `Bearer ${token}`,
      }
    ).then((res) => {
      console.log(res);
      return res;
    });

    const req3 = axiosInterface(
      "POST",
      `/survey/${Number(questionObj.questionId3) + 1}`,
      {
        responses: inputValue[2],
      },
      {
        Authorization: `Bearer ${token}`,
      }
    ).then((res) => {
      console.log(res);
      return res;
    });

    const req = Promise.all([req1, req2, req3]);
    req.then(() => navigate("/"));
  };

  return (
    <div className="py-31">
      <div className="text-22 font-bold text-#7F807F mb-18">질문 2</div>
      <div className="text-22 font-bold mb-18">
        {nickname}님이 느끼시는 불편함의 정도를 말해주세요.
      </div>
      <div className="text-22 text-#7F807F pb-18">
        0 = 이상 없음. 1 = 조금 불편함. 2 = 관리가 필요할 것 같음. 3 = 불편함
      </div>
      <div className="grey-underbar" />
      <div className="mt-15 text-24 font-bold">
        {questionObj.questionThema[0]}
      </div>
      {question1Data &&
        question1Data.map((content, idx) => (
          <div className="mt-15 flex flex-row" key={content}>
            <input
              type="text"
              name={content}
              id={`input-0-${idx}`}
              ref={inputRef[0][idx]}
              className="w-30 border"
              onChange={inputChangeHandler}
            />
            <div className="text-19 ml-13" id={`0-${idx}`}>
              {content}
            </div>
          </div>
        ))}
      <div className="mt-15 text-24 font-bold">
        {questionObj.questionThema[1]}
      </div>
      {question2Data &&
        question2Data.map((content, idx) => (
          <div className="mt-15 flex flex-row" key={content}>
            <input
              type="text"
              name={content}
              id={`input-1-${idx}`}
              ref={inputRef[1][idx]}
              className="w-30 border"
              onChange={inputChangeHandler}
            />
            <div className="text-19 ml-13" id={`1-${idx}`}>
              {content}
            </div>
          </div>
        ))}
      <div className="mt-15 text-24 font-bold">
        {questionObj.questionThema[2]}
      </div>
      {question3Data &&
        question3Data.map((content, idx) => (
          <div className="mt-15 flex flex-row" key={content}>
            <input
              type="text"
              name={content}
              id={`input-2-${idx}`}
              ref={inputRef[2][idx]}
              className="w-30 border"
              onChange={inputChangeHandler}
            />
            <div className="text-19 ml-13" id={`2-${idx}`}>
              {content}
            </div>
          </div>
        ))}
      <button
        type="button"
        className="ml-36 w-full bg-#FF6B6C rounded-42 h-55 text-18 font-bold text-prettywhite mt-20"
        onClick={submitBtnClickHandler}
      >
        제출하기
      </button>
    </div>
  );
};

export default SurveyQuestionsPage;
