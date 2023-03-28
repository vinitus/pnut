import React, { createRef, useRef, useState } from "react";
import ArticleImgBlockComponent from "../Components/ArticleImgBlockComponent";
import newpostAPI from "../api/newpostAPI";

const ArticleCreatePage = () => {
  const subTitle = "font-semibold mb-24";
  const [orderArr, setOrderArr] = useState([1]);
  const [thumbnailImgFile, setThumbnailImgFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [cookingTime, setCookingTime] = useState(0);
  const [ingredients, setIngredient] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const cookingTimeRefArr = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [stepContentRef, setStepContentRef] = useState([useRef(null)]);
  const [stepImgFileRef, setStepImgFileRef] = useState([useRef(null)]);
  const [stepContent, setStepContent] = useState([""]);
  const [stepImgFile, setStepImgFile] = useState([null]);
  const [stepNums, setStepNums] = useState([]);

  // 요리 단계 추가 버튼
  const addStepBtnHandler = () => {
    const lastIdx = orderArr.length + 1;
    setStepContentRef((prev) => {
      const newRefs = [...prev];
      newRefs.push(createRef(null));
      return newRefs;
    });
    setStepImgFileRef((prev) => {
      const newRefs = [...prev];
      newRefs.push(createRef(null));
      return newRefs;
    });
    setStepContent((prev) => {
      return [...prev, null];
    });
    setStepImgFile((prev) => {
      return [...prev, null];
    });
    setOrderArr((prev) => {
      return [...prev, lastIdx];
    });
  };

  // 요리시간 버튼 핸들러
  const cookingTimeBtnHandler = (e) => {
    if (e.target.localName === "div") {
      return;
    }
    const idx = Number(e.target.id.split("time")[1]);
    cookingTimeRefArr.forEach((ref) => {
      ref.current.classList.add("border-#7F807F");
      ref.current.classList.remove("border-#2F80ED");
      ref.current.classList.remove("text-#2F80ED");
    });

    cookingTimeRefArr[idx].current.classList.add("border-#2F80ED");
    cookingTimeRefArr[idx].current.classList.add("text-#2F80ED");
    cookingTimeRefArr[idx].current.classList.remove("border-#7F807F");

    setCookingTime(idx);
  };

  // 양 변경
  const quantityHandler = (type) => {
    if (type === "-" && quantity > 1) {
      setOrderArr((prev) => {
        return prev - 1;
      });
    } else {
      setQuantity((prev) => {
        return prev + 1;
      });
    }
  };

  // 이미지, 텍스트 입력 핸들링
  const stepChangeHandler = (e) => {
    const { type, id } = e.target;
    const idx = Number(id.split("-")[2]) - 1;

    if (type === "text") {
      stepContent[idx] = e.target.value;
    }
    if (type === "file") {
      const file = e.target.files[0];
      stepImgFile[idx] = file;
      setStepNums((prev) => {
        const newArr = [...prev, idx + 1];
        newArr.sort();
        return newArr;
      });
    }
  };

  // 글 등록
  const newpostBtnClickHandler = (e) => {
    e.preventDefault();
    const jsonData = {
      content: content.toString(),
      ingredients: ingredients.toString(),
      quantity: quantity.toString(),
      recipe_steps: stepContent,
      time: cookingTime.toString(),
      title: title,
      userEmail: "admin@ssafy.com",
      stepNums: stepNums,
    };

    console.log(jsonData);

    newpostAPI(jsonData, thumbnailImgFile, stepImgFile)
      .then(() => {
        console.log("hi");
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <>
      <div className="flex items-center flex-col justify-evenly w-full h-100 px-auto grey-underbar">
        <div className="text-23 text-center ml-48">
          자신의 레시피에 대해 자유롭게 이야기 해주세요!
        </div>
        <button
          type="button"
          className="bg-#2F80ED rounded-20 text-prettywhite font-semibold px-50 py-5 text-xl"
          onClick={(e) => {
            newpostBtnClickHandler(e);
          }}
        >
          글 등록하기
        </button>
      </div>
      <div
        className="w-1200 mx-auto border-x border-solid border-#7F807F px-203 pt-41"
        onChange={(e) => {
          if (e.target.type !== "file") {
            return;
          }
          const file = e.target.files[0];
          console.log(file);
          setThumbnailImgFile(file);
        }}
      >
        <div className="w-792 h-354">
          <ArticleImgBlockComponent
            division="thumbnail"
            text="대표 이미지 업로드"
            width="full"
            height="354"
            fileSet={setThumbnailImgFile}
          />
        </div>
        <div className="flex flex-col w-full text-21">
          <div className="w-full grey-underbar flex items-center">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="레시피의 이름이 무엇인가요?"
              className="py-26 w-full px-38 inline-block"
              onChange={(e) => {
                e.stopPropagation();
                setTitle(e.target.value);
              }}
            />
            <div className="inline">0/30</div>
          </div>
          <div className="w-full grey-underbar flex items-center">
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              className="resize-none py-26 px-38 w-full"
              placeholder="레시피에 대한 간단한 설명을 붙여주세요"
              onChange={(e) => {
                e.stopPropagation();
                setContent(e.target.value);
              }}
            />
            <div className="inline">0/30</div>
          </div>
          {/* 이 요소의 하위 항목에 버튼이 존재하고 키보드 작동이 가능합니다. */}
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
          <div
            className="px-40 mt-24 pb-31 grey-underbar"
            onClick={cookingTimeBtnHandler}
          >
            <div className={subTitle}>예상 소요 시간</div>
            <button
              type="button"
              className="border p-10 mr-20 border-#2F80ED text-#2F80ED"
              id="time0"
              ref={cookingTimeRefArr[0]}
            >
              15분 컷
            </button>
            <button
              type="button"
              className="border border-#7F807F p-10 mr-20"
              id="time1"
              ref={cookingTimeRefArr[1]}
            >
              30분 컷
            </button>
            <button
              type="button"
              className="border border-#7F807F p-10 mr-20"
              id="time2"
              ref={cookingTimeRefArr[2]}
            >
              45분 컷
            </button>
            <button
              type="button"
              className="border border-#7F807F p-10"
              id="time3"
              ref={cookingTimeRefArr[3]}
            >
              45분 이상
            </button>
          </div>
          <div className="px-40 mt-26 pb-31 grey-underbar">
            <div className={subTitle}>기준량</div>
            <div className="flex flex-row items-center mx-27-center">
              <button
                type="button"
                className="w-45 h-45 text-41 leading-none bg-#ECECEC"
                onClick={() => {
                  quantityHandler("-");
                }}
              >
                -
              </button>
              <div className="text-27 mx-20">{quantity}</div>
              <button
                type="button"
                className="w-45 h-45 text-41 leading-none bg-#ECECEC"
                onClick={() => {
                  quantityHandler("+");
                }}
              >
                +
              </button>
              <div className="text-27 mx-20">인분</div>
            </div>
          </div>
          <div className="px-40 w-full mt-26 pb-31 grey-underbar">
            <div className={subTitle}>재료</div>
            <div className="w-full flex items-center">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="resize-none w-full py-26"
                placeholder="재료를 입력해주세요"
                onChange={(e) => setIngredient(e.target.value)}
              />
              <div className="inline">0/30</div>
            </div>
          </div>
          <div
            className="px-40 w-full mt-26 pb-31"
            onChange={stepChangeHandler}
          >
            <div className={subTitle}>만드는 방법</div>
            {orderArr.map((value) => (
              <div className="flex flex-row" key={`div-${value}`}>
                <div className="bg-#AEAFAE w-70 h-70 rounded-50 text-prettywhite flex items-center justify-center mr-24 text-30">
                  {value}
                </div>
                <div className="text-26">
                  <input
                    type="text"
                    id={`step-content-${value}`}
                    ref={stepContentRef[value - 1]}
                    className="h-70 p-3 w-full"
                    placeholder="만드는 방법을 입력하세요."
                  />
                  <div className="w-624 h-303">
                    <ArticleImgBlockComponent
                      setRef={stepImgFileRef[value - 1]}
                      division={`step-img-${value}`}
                      text="이미지 업로드(선택)"
                      width="624"
                      height="303"
                      fileSet={setThumbnailImgFile}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="w-712 h-86 bg-#FFD1D1 mt-100"
              id="addStep"
              onClick={addStepBtnHandler}
            >
              단계 추가
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCreatePage;
