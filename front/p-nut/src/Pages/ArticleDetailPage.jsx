import axiosInterface from "../api/axiosInterface";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import OrderBlock from "../Components/OrderBlock";
import CommentForm from "../Components/CommentForm";
import { useSelector } from "react-redux";

const ArticleDetailPage = () => {
  // content ingredients nickNAme quantity recipeSteps thumbnail_image_url time title visit
  const [data, setData] = useState();
  const [newComment, setNewComment] = useState("");
  const { articleId } = useParams();
  const token = useSelector((state) => state.auth.authentication.token);
  const [content, setContent] = useState();
  const [ingredients, setIngredients] = useState();
  const [nickName, setNickName] = useState();
  const [quantity, setQuantity] = useState();
  const [recipeSteps, setRecipeSteps] = useState();
  const [thumbnailImageUrl, setThumbnailImageUrl] = useState();
  const [time, setTime] = useState();
  const [title, setTitle] = useState();
  const [visit, setVisit] = useState();
  const [comments, setComments] = useState();
  const [likes, setLikes] = useState();
  const [likeOrNot, setLikeOrNot] = useState();

  const profileImgPath = "/assets/Article_circle.png";

  const quantityArr = useMemo(() => {
    return ["15분컷", "30분컷", "45분컷", "45분 이상"];
  }, []);

  useEffect(() => {
    console.log(token);
    if (!data) {
      if (token) {
        axiosInterface("GET", `/boards/board/${articleId}`, "", {
          Authorization: `Bearer ${token}`,
        }).then((res) => setData(res));
      } else {
        axiosInterface("GET", `/boards/board/${articleId}`).then((res) =>
          setData(res)
        );
      }
    } else {
      const {
        content,
        ingredients,
        nickName,
        quantity,
        recipeSteps,
        thumbnailImageUrl,
        time,
        title,
        visit,
        comments,
        likes,
        likeOrNot,
      } = data.data;

      setContent(content);
      setIngredients(ingredients);
      setNickName(nickName);
      setQuantity(quantity);
      setRecipeSteps(recipeSteps);
      setThumbnailImageUrl(thumbnailImageUrl);
      setTime(time);
      setTitle(title);
      setVisit(visit);
      setComments(comments);
      setLikes(likes);
      setLikeOrNot(() => {
        if (likeOrNot === 0) {
          return 0;
        } else if (likeOrNot === 1) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }, [articleId, data, token]);

  // 댓글 보여주기
  let comment = <div className="text-#AEFEAE mb-40">댓글이 아직 없어요</div>;
  if (comments?.length > 0) {
    comment = (
      <div className="mb-40">
        {comments.map((value, idx) => (
          <CommentForm
            key={`comment-${idx}`}
            content={value.content}
            nickName={value.nickName}
            date={value.createDate}
          />
        ))}
      </div>
    );
  }

  // 좋아요
  const heartClickHandler = () => {
    if (!token) {
      return;
    }
    if (likeOrNot === 1) {
      axiosInterface("delete", `/boards/like/${articleId}`, "", {
        Authorization: `Bearer ${token}`,
      }).then(() => {
        setLikeOrNot(0);
      });
    } else if (likeOrNot === 0) {
      axiosInterface("post", `/boards/like/${articleId}`, "", {
        Authorization: `Bearer ${token}`,
      }).then(() => {
        setLikeOrNot(1);
      });
    }
  };

  // 댓글 작성 이벤트
  const newCommentSubmitHandler = () => {
    axiosInterface(
      "post",
      `/boards/comments/${articleId}`,
      {
        content: newComment,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    )
      .then(() => {
        if (token) {
          axiosInterface("GET", `/boards/board/${articleId}`, "", {
            Authorization: `Bearer ${token}`,
          }).then((res) => setData(res));
        } else {
          axiosInterface("GET", `/boards/board/${articleId}`).then((res) =>
            setData(res)
          );
        }
      })
      .catch((err) => console.log(err));
  };

  // 로그인 확인
  const tokenCheckHandler = (e) => {
    if (!token) {
      e.target.blur();
      return;
    }
  };

  return (
    <div className="flex w-1200 mx-auto flex-col">
      {data && (
        <>
          <div className="flex mb-85">
            <img
              src={`${thumbnailImageUrl}`}
              alt=""
              className="w-586 h-407 mx-7 my-auto"
            />
            <div className="w-600 pl-80">
              <div className="flex items-center mb-30">
                <img src={profileImgPath} alt="" className="w-51 h-51 mx-4" />
                <div className="mx-15 text-27">{nickName}</div>
              </div>
              <div className="text-33 font-bold mb-32 h-37">{title}</div>
              <div className="flex items-center pb-32 grey-underbar">
                <div className="border border-#2B2C2B text-26 px-10 py-5 font-semibold">
                  {quantityArr[time]}
                </div>
                <div className="ml-27 text-26 font-semibold">
                  {quantity}인분
                </div>
              </div>
              <div className="my-26 text-22 font-medium">{content}</div>
              <div className="w-full flex place-content-between">
                <div className="text-22">
                  댓글 {comments?.length} 좋아요 {likes} 조회수 {visit}
                </div>
                <img
                  src={`/assets/heart${likeOrNot}.png`}
                  alt=""
                  className="mr-43"
                  onClick={heartClickHandler}
                />
              </div>
            </div>
          </div>
          <div className="text-42 font-bold h-auto mb-21">재료</div>
          <div className="w-1200 px-65 pb-56 grey-underbar border-#2B2C2B">
            <div className="bg-#F2F2F2 text-26 w-1070 py-20 px-75">
              {ingredients}
            </div>
          </div>
          {recipeSteps &&
            Object.entries(recipeSteps).map(([key, value], idx) => (
              <OrderBlock key={key} imgPath={value} text={key} idx={idx} />
            ))}
          <div className="mt-150 w-1200 mx-auto">
            <div className="flex items-center mb-40">
              <div className="text-37 font-bold">댓글</div>
              <div className="text-55 text-#FF6B6C font-extrabold ml-22">
                {comments?.length}
              </div>
            </div>
            <div className="relative h-219 pb-64 grey-underbar mb-25">
              <input
                type="text"
                className="text-26 w-full border border-[#DFE0DF] py-27 px-23"
                placeholder="댓글을 입력하세요."
                onChange={(e) => setNewComment(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    newCommentSubmitHandler();
                  }
                }}
                onFocus={tokenCheckHandler}
              />
              <button
                type="button"
                className="absolute right-0 bottom-64 bg-[#5B5F97] text-prettywhite text-24 font-bold px-14 py-7"
                onClick={() => newCommentSubmitHandler()}
              >
                작성
              </button>
            </div>
            <div>{comment}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleDetailPage;
