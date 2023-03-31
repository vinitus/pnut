import React from "react";
import SurveyCardComponent from "../Components/SurveyCardComponent";

const SurveyRecommendPage = () => {
  const data = [
    {
      title: "비타민D",
      tag1: "# 유산균 증식 및 유해균 억제",
      tag2: "# 유산균 증식 및 유해균 억제",
      guidetitle: "비타민 D는 아침에 먹어야해요요",
      guidecontext:
        "비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요",
      nutrienttitle: "비타민 D는 어떤게 좋아여",
      nutrientcontext:
        "비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요",
      id: 1,
    },
    {
      title: "비타민D",
      tag1: "# 유산균 증식 및 유해균 억제",
      tag2: "# 유산균 증식 및 유해균 억제",
      guidetitle: "비타민 D는 아침에 먹어야해요요",
      guidecontext:
        "비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요",
      nutrienttitle: "비타민 D는 어떤게 좋아여",
      nutrientcontext:
        "비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요",
      id: 2,
    },
    {
      title: "비타민D",
      tag1: "# 유산균 증식 및 유해균 억제",
      tag2: "# 유산균 증식 및 유해균 억제",
      guidetitle: "비타민 D는 아침에 먹어야해요요",
      guidecontext:
        "비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요",
      nutrienttitle: "비타민 D는 어떤게 좋아여",
      nutrientcontext:
        "비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요비타민 D는 아침에 먹어야해요요",
      id: 3,
    },
  ];

  return (
    <div className="w-full flex justify-center text-#2B2C2B ">
      <div className="flex flex-col w-1200">
        {/* # 건강설문 결과표 */}
        <div className="w-full px-40 pb-20 bg-#FF6B6C/30 flex flex-col space-y-30">
          <div className="space-y-30 mt-120">
            <div className="text-2xl font-extrabold">
              <p>김민경님의</p>
              <p>건강설문 결과표</p>
            </div>
            <div className="flex text-sm space-x-15">
              <p className="font-extrabold">성별</p>
              <p className="font-bold text-gray-800">여성</p>
              <p className="font-extrabold">나이</p>
              <p className="font-bold text-gray-800">25세</p>
            </div>
          </div>
          <div className="flex justify-center bg-white rounded-50 ">
            <div className="justify-center space-y-20 p-30">
              <img className="mx-auto" src="assets\power.png" alt="" />
              <p className="text-center text-xl font-bold text-#FF6B6C">
                생활습관 개선이 필요해요
              </p>
              <section className="space-y-20 font-bold text-gray-800 text-md">
                <div className="flex space-x-20">
                  <p>
                    1. 배변활동을 돕는 유익균으로 장내 좋은 환경 유지가
                    필요해요.
                  </p>
                  <p>
                    1. 배변활동을 돕는 유익균으로 장내 좋은 환경 유지가
                    필요해요.
                  </p>
                </div>
                <div className="flex space-x-20">
                  <p>
                    1. 배변활동을 돕는 유익균으로 장내 좋은 환경 유지가
                    필요해요.
                  </p>
                  <p>
                    1. 배변활동을 돕는 유익균으로 장내 좋은 환경 유지가
                    필요해요.
                  </p>
                </div>
                <div className="flex space-x-20">
                  <p>
                    1. 배변활동을 돕는 유익균으로 장내 좋은 환경 유지가
                    필요해요.
                  </p>
                  <p>
                    1. 배변활동을 돕는 유익균으로 장내 좋은 환경 유지가
                    필요해요.
                  </p>
                </div>
              </section>
            </div>
          </div>
          <p className="text-sm text-center">
            본 결과는 의사의 처방을 대신하지 않습니다.
          </p>
        </div>
        {/* # 영양소 카드 컴포넌트 */}
        <div className="py-30 ">
          {data.map((test) => (
            <SurveyCardComponent
              title={test.title}
              tag1={test.tag1}
              tag2={test.tag2}
              guidetitle={test.guidetitle}
              guidecontext={test.guidecontext}
              nutrienttitle={test.nutrienttitle}
              nutrientcontext={test.nutrientcontext}
              key={`${test.id}`}
              initialExpanded={test.id === 3}
              additionalClass={test.id === 3 ? "rounded-b-lg" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyRecommendPage;
