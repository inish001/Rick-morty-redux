import axios from "axios";
import { CharacterConstants } from "../constants/CharacterConstants";

export const getCharacters = (payload) => {
  return (dispatch) => {
    dispatch(request(CharacterConstants.CHAR_REQUEST));
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        // console.log("actionn")
        dispatch(success(CharacterConstants.CHAR_SUCCESS, response));
      })
      .catch((error) => {
        dispatch(failure(CharacterConstants.CHAR_FAILURE, error));
      });
  };
};

export const getCharactersDetails = (characterId) => {
  return (dispatch) => {
    dispatch(request(CharacterConstants.CHAR_DETAILS_REQUEST));
    axios
      .get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => {
        dispatch(success(CharacterConstants.CHAR_DETAILS_SUCCESS, response));
      })
      .catch((error) => {
        dispatch(failure(CharacterConstants.CHAR_DETAILS_FAILURE, error));
      });
  };
};

function request(action, payload) {
  return { type: action, payload };
}

function success(action, response) {
  return { type: action, response };
}

function failure(action, error) {
  return { type: action, error };
}
