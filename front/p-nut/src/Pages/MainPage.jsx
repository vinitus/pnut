import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* 동영상 헤더 */}
      <div className="relative h-600 overflow-hidden mx-auto">
        <video
          loop
          muted
          autoPlay
          class="h-full w-full object-cover "
          src="src\assets\videoplayback.mp4"
          type="video/mp4"
        ></video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-9 text-center text-white">
          <div className=" h-1/3 "></div>
          <p className=" font-nanum font-semibold text-2xl">
            당신만의 영양 솔루션
          </p>
          <div className=" h-3   "></div>
          <p className="font-nanum font-semibold text-white/60 text-2xl">
            Eat and Enjoy with
          </p>
          <div className=" h-3 "></div>
          <p className="font-nanum font-bold text-5xl">P.nut</p>
        </div>
      </div>

      {/* 프로젝트 설명 */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-screen-lg px-16 py-20">
          <p className="font-nanum font-light text-lg text-gray-800">
            영양제, 영양소에 대한 관심은 있지만 음식 섭취에 있어서는 영양소를
            신경쓰지 않나요?
          </p>
          <div className="w-full h-5"></div>
          <div className="grid grid-cols-2 gap-5">
            <div class="flex flex-col items-center justify-center rounded-sm border border-gray-200 bg-white">
              <p class=" font-medium text-gray-800">현대인 영양소 섭취 비율</p>
              <p class="text-2xl font-bold text-brand-1">555,098kg +</p>
            </div>
            <div class="flex flex-col gap-10px rounded-sm border border-gray-200 bg-white py-25px px-36px">
              <div class="flex items-center justify-between  text-gray-800">
                <span class=" flex items-start gap-4px font-medium">
                  <span>아낀 물의 양</span>
                  <span class="font-body2 font-medium text-gray-500">
                    million litres
                  </span>
                </span>
                <span
                  class="font-bold leading-1"
                  style={{ fontSize: 23 + "px" }}
                >
                  11,213
                </span>
              </div>
              <div class="flex items-center justify-between  text-gray-800">
                <span class=" font-medium">아낀 플라스틱 수</span>
                <span
                  class="font-bold leading-1"
                  style={{ fontSize: 23 + "px" }}
                >
                  208,508
                </span>
              </div>
              <div class="flex items-center justify-between  text-gray-800">
                <span class=" flex items-start gap-4px font-medium">
                  <span>절감한 탄소</span>
                  <span class="font-body2 font-medium text-gray-500">kg</span>
                </span>
                <span
                  class="font-bold leading-1"
                  style={{ fontSize: 23 + "px" }}
                >
                  331,893
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
