import axiosInterface from "./axiosInterface";

/** @params recipeCreateReq, files
 * recipeCreateReq : object
 * files : FormData
 */
export default async function newpostAPI(
  recipeCreateReq,
  thumbnailImgFile,
  stepImgFile,
  token
) {
  const data = new FormData();
  data.append(
    "recipeCreateReq",
    new Blob([JSON.stringify(recipeCreateReq)], { type: "application/json" })
  );
  data.append("file", thumbnailImgFile);
  stepImgFile.forEach((file) => {
    if (file) {
      data.append("file", file);
    }
  });
  const res = await axiosInterface("post", "/boards/create", data, {
    Authorization: `Bearer ${token}`,
  });
  console.log(res);
}
