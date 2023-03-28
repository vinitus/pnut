import React, { useRef, useState } from "react";

/** @params division, size, text */
const ArticleImgBlockComponent = (props) => {
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const { division, width, height, text, setRef, fileSet } = props;

  const opacityRef = useRef();
  const previewImgRef = useRef();

  const inputButtonHandler = () => {
    setRef.current.click();
  };

  return (
    <div
      className={`bg-#F5F5F5 flex items-center justify-center flex-col grey-underbar h-${height} w-${width} relative`}
      onDragOver={(e) => {
        e.preventDefault();
        const div = opacityRef.current;
        div.classList.add("opacity-90");
        const img = previewImgRef.current;
        img.classList.add("opacity-10");
      }}
      onDragLeave={() => {
        const div = opacityRef.current;
        div.classList.remove("opacity-90");
        const img = previewImgRef.current;
        img.classList.remove("opacity-10");
      }}
      onDrop={(e) => {
        e.preventDefault();
        const div = opacityRef.current;
        div.classList.remove("opacity-90");
        const img = previewImgRef.current;
        img.classList.remove("opacity-10");

        const dragFile = e.dataTransfer.files;
        const inputFileTag = setRef.current;
        const propsRef = setRef.current;
        console.log(propsRef, setRef);
        inputFileTag.files = dragFile;
        fileSet(e.dataTransfer.files[0]);
        const reader = new FileReader();
        reader.onload = ({ target }) => {
          setPreviewImgSrc(target.result);
        };
        reader.readAsDataURL(e.dataTransfer.files[0]);
      }}
    >
      <img
        src={previewImgSrc}
        alt=""
        className="absolute h-full z-100"
        ref={previewImgRef}
      />

      <button
        type="button"
        onClick={() => {
          inputButtonHandler();
        }}
        ref={opacityRef}
      >
        <img src="./assets/plus.png" alt="plus" />
      </button>
      <div className="mt-20 text-2xl" ref={opacityRef}>
        {text}
      </div>
      <input
        type="file"
        id={division}
        className="hidden opacity-90 opacity-10"
        ref={setRef}
        onChange={(e) => {
          fileSet(e.target.files[0]);
          const reader = new FileReader();
          reader.onload = ({ target }) => {
            setPreviewImgSrc(target.result);
          };
          reader.readAsDataURL(e.target.files[0]);
        }}
      />
    </div>
  );
};

export default ArticleImgBlockComponent;
