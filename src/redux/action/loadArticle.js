import axios from "axios";
export const loadArticle = () => {
  return (dispatch, getState) => {
    let options = {
      url: "https://rickandmortyapi.com/api/character",
      method: "GET",
    };

    dispatch({ type: "Start" });

    axios(options)
      .then((res) => {
        console.log(res.data.results);
        dispatch({ type: "Success", payload: res.data.results });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "Failure", payload: err });
      });
  };
};
