import axios from "axios";
import React, { useEffect, useState } from "react";

const SurveyPage = () => {
  const [token, setToken] = useState();
  const question = {
    마음: [
      "우울한 기분이 자주 들어요.",
      "감정 조절이 힘들어요.",
      "이유 없이 기분이 좋지 않을때가 있어요.",
      "사소한 일에도 스트레스를 많이 받아요.",
    ],
    피부: [
      "피부 탄력이 부족한 것 같은 느낌이 들어요.",
      "입술이 건조하고 자주 갈라져요.",
      "피부가 금세 거칠어져요.",
      "피부 노화 예방에 관심이 많아요.",
      "손톱, 발톱이 쉽게 깨지는 경우가 있어요.",
    ],
    구강관리: [
      "치아 건강에 관심이 많아요.",
      "구내염이 자주 생겨요.",
      "잇몸에서 피가 나거나 염증이 생길 때가 있어요.",
    ],
    다이어트: [
      "체중 증가에 관심이 많아요.",
      "체중 감량에 관심이 많아요.",
      "빈혈기가 있어요.",
      "화장실을 잘 가지 못해요.",
    ],
    "뼈/관절": [
      "뼈가 약해진 것 같은 느낌이 있어요.",
      "뼈가 부러져 본 경험이 있어요.",
      "관절염 증세가 있어요.",
      "관절 건강에 관심이 많아요.",
    ],
    "피로/활력": [
      "무기력하고 식욕이 없어요.",
      "신경이 예민하고 밤에 잠을 이루기 힘들어요.",
      "푹 자고 일어나도 피곤해요.",
      "만성피로가 있어요.",
      "가끔 눈이 파르르 떨려요",
    ],
    "간 건강": ["소화가 잘 안돼요.", "배가 자주 아파요."],
    "장 건강": [
      "위경련을 겪은 적이 있어요.",
      "고기 위주의 식사를 주로 해요밥을 먹고 속이 불편한 적이 있어요.",
    ],
    "모발/두피": [
      "모발이 얇아요.",
      "모발이 빠지는 것 같아요모발에 윤기와 탄력이 없어요.",
      "두피에 뾰루지나 염증이 잘 생겨요모발이 뚝뚝 끊겨요.",
      "모발이 건조해요",
    ],
    "위/소화": ["술을 자주 마셔요."],
    면역력: [
      "감기에 자주 걸리는 편이에요.",
      "야외활동을 자주 하지 않아요.",
      "입술이나 입 주변에 물집이 자주 생겨요면역력 보강에 관심이 많아요.",
    ],
  };

  const [responseArr, setResponseArr] = useState([
    0,
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0],
    [0, 0],
    [0, 0, 0, 0],
    [0],
    [0, 0, 0],
  ]);

  console.log(responseArr);
  return (
    <div className="h-2000 flex flex-col">
      SurveyPage
      <input
        type="text"
        id="token"
        placeholder="token값 입력"
        className="text-30"
        onChange={(e) => {
          setToken(e.target.value);
        }}
      />
      <button
        className="text-30 w-300"
        type="button"
        value=""
        onClick={() => {}}
      >
        설문조사 요청 부르기
      </button>
      <div
        className="ml-20"
        onChange={(e) => {
          const [symptomIdx, questionIdx] = e.target.id.split("-");
          setResponseArr((prev) => {
            prev[symptomIdx][questionIdx] = Number(e.target.value);
            return [...prev];
          });
        }}
      >
        {Object.entries(question).map(([key, value], index) => (
          <div key={key} id={index + 1}>
            <div className="mt-40">{key}</div>
            {value.map((question, idx) => (
              <div className="flex flex-row">
                <input
                  type="text"
                  className="w-29 mr-30"
                  placeholder="점수"
                  id={`${index + 1}-${idx}`}
                />
                <div key={question}>{question}</div>
              </div>
            ))}
            <button
              className="text-30 w-300"
              type="button"
              value=""
              onClick={() => {
                const data = responseArr[index + 1];
                data.map((value) => Number(value));
                axios
                  .post(
                    `/survey/${index + 1}`,
                    {
                      responses: data,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  )
                  .then((res) => {
                    console.log(res);
                  });
              }}
            >
              제출
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveyPage;
