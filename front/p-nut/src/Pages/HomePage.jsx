import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="font-nanum">홈페이지</h1>
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

export default HomePage;
