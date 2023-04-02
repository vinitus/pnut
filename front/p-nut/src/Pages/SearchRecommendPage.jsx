import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchArrRequest } from "../stores/searchSlice";
import { useAutoComplete } from "../hooks/useAutoComplete";
import RecipeThumbnailComponent from "../Components/RecipeThumbnailComponent";

const SearchRecommendPage = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  // 검색 버튼 눌리기 전에
  const [searched, setSearched] = useState(false);
  // 검색 결과
  const [searchResults, setSearchResults] = useState([]);

  const foodArr = useSelector((state) => state.search.foodArr);
  const ingredientArr = useSelector((state) => state.search.ingredientArr);

  const [totalTitleArr, createFuzzyMatcher] = useAutoComplete(
    foodArr,
    ingredientArr
  );

  // 부족한 영양소 기준 재료를 가져와서 10개 슬라이싱
  const tag10 = [
    "계란",
    "닭고기",
    "두부",
    "햄",
    "김치",
    "치즈",
    "감자",
    "소고기",
    "돼지고기",
    "참치",
  ];

  // const [tag10, setTag10] = useState();

  // const email = useSelector((state) => state.auth.authentication.email);

  useEffect(() => {
    dispatch(searchArrRequest());
    // djangoAPI("get", "/ingredients/tags", {
    //   email,
    // }).then((res) => console.log(res));
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    autoCompleteHandler(event.target.value);
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    const results = [];
    setSearchResults(results);
    setSearched(true);
  };

  const food = [
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 1,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 2,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 3,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 4,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 5,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 6,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 7,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 8,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 9,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 10,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 11,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 12,
    },
  ];

  // pills 클릭 시 bg color 바뀌기
  const [selectedPills, setSelectedPills] = useState([]);

  const handlePillClick = (index) => {
    if (selectedPills.includes(index)) {
      setSelectedPills(
        selectedPills.filter((pillIndex) => pillIndex !== index)
      );
    } else {
      setSelectedPills([...selectedPills, index]);
    }
  };

  const [autoCompleteArr, setAutoCompleteArr] = useState([]);

  const autoCompleteHandler = (input) => {
    const regex = createFuzzyMatcher(input);
    const arr = [];
    for (let i = 0; totalTitleArr.length > i; i += 1) {
      if (arr.length >= 10) {
        break;
      }
      const matchingRegex = totalTitleArr[i].match(regex);
      if (matchingRegex) {
        arr.push(matchingRegex);
      }
    }
    setAutoCompleteArr(arr);
  };

  return (
    <div>
      {/* 동영상 헤더 */}
      <div className="relative mx-auto overflow-hidden h-380 mb-50">
        <video
          loop
          muted
          autoPlay
          className="object-cover"
          src="\assets\searchplayback.mp4"
          type="video/mp4"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute text-center text-white inset-9">
          <div className="h-40" />
          <p className="text-3xl font-semibold ">음식을 검색해보세요!</p>
          <div className="h-40 " />
          <div className="flex justify-center w-full">
            <form className="relative">
              <input
                className="block py-2 pr-3 text-xl font-bold text-white placeholder-gray-200 border border-gray-300 rounded-full shadow-md placeholder:font-medium w-700 h-60 pl-50 bg-white/20"
                type="text"
                placeholder="음식이나 식재료를 검색해보세요"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="button" onClick={handleSearchClick}>
                <img
                  src="assets\Search.png"
                  alt=""
                  className="absolute text-gray-400 top-1 mt-15 right-50 h-30"
                />
              </button>
            </form>
          </div>
          <div className="h-20 " />
          <div className="flex flex-col justify-center space-y-20">
            <div className="flex mx-auto space-x-30">
              {tag10 &&
                tag10.map((item, index) => (
                  <div key={index} onClick={() => handlePillClick(index)}>
                    <p
                      className={`border border-white rounded-full w-fit px-15 py-8 ${
                        selectedPills.includes(index) ? "bg-#FF6B6C" : ""
                      }`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-#2B2C2B ">
        <div className="flex flex-col w-1200">
          {!searched ? (
            <div className="grid grid-cols-4 gap-56 w-1200 mb-50">
              {food.map((value) => (
                <RecipeThumbnailComponent
                  imgPath={value.imgPath}
                  title={value.title}
                  kcal={value.kcal}
                  mainIngredients={value.mainIngredients}
                  time={value.time}
                  id={value.id}
                  key={`${value.id}`}
                />
              ))}
            </div>
          ) : searchResults.length > 0 ? (
            <div className="grid grid-cols-4 gap-56 w-1200 mb-50">
              {food.map((value) => (
                <RecipeThumbnailComponent
                  imgPath={value.imgPath}
                  title={value.title}
                  kcal={value.kcal}
                  mainIngredients={value.mainIngredients}
                  time={value.time}
                  id={value.id}
                  key={`${value.id}`}
                />
              ))}
            </div>
          ) : (
            // 검색 결과가 없을 때
            <div className="flex flex-col justify-center h-350">
              <div className="w-full h-30" />
              <div className="flex justify-center">
                <img
                  className="animate-bounce h-150"
                  src="assets/sadpeanut.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-20" />
              <p className="mb-10 text-xl font-semibold text-center">
                검색 결과가 없습니다
              </p>
              <p className="text-xl text-center text-gray-700 ">
                다른 음식을 검색해주세요
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchRecommendPage;
