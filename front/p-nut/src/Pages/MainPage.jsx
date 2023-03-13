import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      <h1 className="flex font-nanum">Main</h1>
      <button
        type="button"
        onClick={() => {
          navigate("/newpost");
        }}
      >
        게시글작성
      </button>
    </div>
  );
};

export default MainPage;
