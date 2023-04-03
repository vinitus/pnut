import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { searchArrRequest } from "../stores/searchSlice";
import { useAutoComplete } from "../hooks/useAutoComplete";
import RecipeThumbnailComponent from "../Components/RecipeThumbnailComponent";
import SelectBtn from "../UI/SelectBtn";
import djangoAPI from "../api/djangoAPI";

const SearchRecommendPage = () => {
  const dispatch = useDispatch();
  const [tag10, food] = useLoaderData();
  console.log(tag10);
  console.log(food);

  const [searchQuery, setSearchQuery] = useState("");
  // 검색 버튼 눌리기 전에
  const [searched, setSearched] = useState(false);
  // 검색 결과
  const [searchResults, setSearchResults] = useState([]);
  // 검색 타입
  const [searchType, setSearchType] = useState("음식");

  const foodArr = useSelector((state) => state.search.foodArr);
  const ingredientArr = useSelector((state) => state.search.ingredientArr);

  const [totalTitleArr, createFuzzyMatcher] = useAutoComplete(
    foodArr,
    ingredientArr
  );

  const email = useSelector((state) => state.auth.authentication.email);

  useEffect(() => {
    dispatch(searchArrRequest());
    // djangoAPI("get", "/ingredients/tags", {
    //   email,
    // }).then((res) => console.log(res));
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value) {
      autoCompleteHandler(event.target.value);
      return;
    }
    setAutoCompleteArr("");
  };

  // 검색 버튼
  const handleSearchClick = (event) => {
    event.preventDefault();
    let typeInParams = "food";
    if (searchType === "") {
      typeInParams = "ingredient";
    }
    djangoAPI("GET", "foods/search", {
      type: typeInParams,
      keyword: searchQuery,
    }).then((res) => {
      console.log(res);
      setSearchResults(res.data.data);
      setSearched(true);
    });
  };

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

  // 자동완성 관련 로직
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
    arr.sort((prev, cur) => {
      if (prev.index > cur.index) return 1;
      return -1;
    });
    setAutoCompleteArr(arr);
  };

  console.log(autoCompleteArr);

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
          <p className="text-3xl font-semibold my-40">음식을 검색해보세요!</p>
          <div className="flex flex-col justify-center space-y-20 mb-20">
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
          <div className="flex justify-center w-full">
            <form className="relative w-700" onSubmit={handleSearchClick}>
              <input
                className="block py-2 pr-3 text-xl font-bold text-white placeholder-gray-200 border border-gray-300 rounded-full shadow-md placeholder:font-medium w-full h-60 pl-50 bg-white/20"
                type="text"
                placeholder="음식이나 식재료를 검색해보세요"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <div className="absolute text-gray-400 top-1 mt-15 right-10 flex flex-row">
                <button type="button">
                  <img src="assets\Search.png" alt="" className="h-30" />
                </button>
                <SelectBtn
                  choiceFontColor="black"
                  fontColor="gray-200"
                  fontSize="xl"
                  btnName={searchType}
                  choiceArr={["음식", "재료"]}
                  clickHandler={setSearchType}
                />
              </div>
              {autoCompleteArr.length > 0 && (
                <div className="block py-2 pr-3 text-xl font-bold border border-gray-300 rounded-40 shadow-md w-full pl-50 bg-white/20">
                  {autoCompleteArr.map((key) => (
                    <div key={key.input}>{key.input}</div>
                  ))}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-#2B2C2B ">
        <div className="flex flex-col w-1200">
          {!searched && (
            <div className="grid grid-cols-4 gap-56 w-1200 mb-50">
              {food.map((value) => (
                <RecipeThumbnailComponent
                  imgPath={value.url}
                  title={value.name}
                  kcal={value.kcal}
                  mainIngredients={value.ingredients}
                  time={value.time}
                  id={value.food_id}
                  key={`${value.food_id}`}
                />
              ))}
            </div>
          )}
          {searched && searchResults.length > 0 && (
            <div className="grid grid-cols-4 gap-56 w-1200 mb-50">
              {searchResults.map((value) => (
                <RecipeThumbnailComponent
                  imgPath={value.url}
                  title={value.name}
                  kcal={value.kcal}
                  mainIngredients={value.ingredients}
                  time={value.time}
                  id={value.food_id}
                  key={`${value.food_id}`}
                />
              ))}
            </div>
          )}
          {searched && searchResults.length === 0 && (
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

export async function loader() {
  const tagRes = await djangoAPI("get", "/foods/tag");
  const tag10 = tagRes.data.data;
  let food = [];

  const setFood = new Promise((resolve) => {
    tag10.forEach((key, idx) => {
      djangoAPI("GET", "/foods/search", {
        type: "ingredient",
        keyword: key,
      })
        .then((res) => {
          food = [...food, ...res.data.data];
          console.log(res);
        })
        .finally(() => {
          if (food.length > 12) {
            resolve();
          }
          if (idx === 9) {
            resolve();
          }
        });
    });
  });
  await setFood;
  const random12Food = food.slice(0, 12);
  return [tag10, random12Food];
}
