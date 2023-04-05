import React, { createRef, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import symptomsAPI from "../api/symptomsAPI";
import OptionSelect from "../Components/OptionSelect";
import { useDivInputEventHandler } from "../hooks/useInputDivHandler";
import AlertModal from "../UI/AlertModal";
import axiosInterface from "../api/axiosInterface";

const SurveySymptomsPage = () => {
  // 모달 관련
  const [showAlertModal, setShowAlertModal] = useState(false);

  const token = useSelector((state) => state.auth.authentication.token);
  const [data, setData] = useState();
  const [nickname, setNickname] = useState();
  const [symptomsRef, setSymptomsRef] = useState([]);

  const navigate = useNavigate();

  axiosInterface("get", "/survey/mypage", "", {
    Authorization: `Bearer ${token}`,
  }).then((res) => console.log(res));
  const sympHandler = useCallback(async (token) => {
    const res = await symptomsAPI(token);
    setData(res.slice(1));
    setNickname(res[0]);

    for (let i = 1; i < res.length; i += 1) {
      setSymptomsRef((prev) => {
        return [...prev, createRef(null)];
      });
    }
    return res;
  }, []);

  useEffect(() => {
    sympHandler(token);
  }, [sympHandler, token]);

  const [clickedCnt, checkedObj, eventDispatcher] =
    useDivInputEventHandler(symptomsRef);

  const aboveBtnClickHandler = () => {
    navigate("/newsurvey");
  };

  const startBtnClickHandler = () => {
    let selectedOptions = Object.entries(checkedObj)
      .filter(([key, value]) => value !== "")
      .map(([key, value]) => key);

    if (selectedOptions.length < 3) {
      setShowAlertModal(true);
    } else {
      let params = "";
      selectedOptions.forEach((key) => {
        const transformValue = checkedObj[key].replace("/", "or");
        params += `/${key}=${transformValue}`;
      });
      console.log(`/newsurvey${params}`);
      navigate(`/newsurvey${params}`);
    }
  };

  const closeModal = () => {
    setShowAlertModal(false);
  };

  return (
    <div className="w-674 py-50">
      {data && (
        <>
          <div className="text-22 font-bold text-#7F807F mb-18">질문 1</div>
          <div className="font-bold text-22 mb-18">
            {nickname}님이 불편하시고 걱정되는 3가지를 선택하세요.
          </div>
          <div className="text-22 text-#7F807F pb-18">
            우선적으로 관리가 필요한 곳을 선택하세요.
          </div>
          <div className="grey-underbar" />
          {data.map((content, idx) => (
            <OptionSelect
              type="checkbox"
              content={content}
              idx={idx}
              eventDispatcher={eventDispatcher}
              refInfo={symptomsRef[idx]}
              key={content}
            />
          ))}
          <button
            type="button"
            className="w-172 border border-#535453 rounded-42 h-55 text-18 font-bold mt-20"
            onClick={aboveBtnClickHandler}
          >
            이전
          </button>
          <button
            type="button"
            className="ml-36 w-465 bg-#FF6B6C rounded-42 h-55 text-18 font-bold text-prettywhite mt-20"
            onClick={startBtnClickHandler}
          >
            시작하기
          </button>
          <AlertModal
            open={showAlertModal}
            close={closeModal}
            onCheck={closeModal}
          >
            <p>3가지를 선택해주세요.</p>
          </AlertModal>
        </>
      )}
    </div>
  );
};

export default SurveySymptomsPage;
