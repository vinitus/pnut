import axios from "axios";

/** @params recipeCreateReq, files
 * recipeCreateReq : object
 * files : FormData
 */
export default async function newpostAPI(
  recipeCreateReq,
  thumbnailImgFile,
  stepImgFile
) {
  const data = new FormData();
  data.append(
    "recipeCreateReq",
    new Blob([JSON.stringify(recipeCreateReq)], { type: "application/json" })
  );
  data.append("thumbnailImgFile", thumbnailImgFile);
  stepImgFile.forEach((file) => {
    if (file) {
      data.append("file", file);
    }
  });
  const res = await axios.post("/boards/create", data);
  console.log(res);
}
