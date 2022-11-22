import { CharacterConstants } from "../constants/CharacterConstants";

const initialState = {
  loading: false,
  charData: [],
  charDetails:[],
  error: "",
};
const CharacterReducer = (state = initialState, action) => {
    console.log("reducerr",action)
  switch (action.type) {
    case CharacterConstants.CHAR_REQUEST:
      return {
        ...state,
        loading: true,
        charData: [],
        error: "",
      };
    case CharacterConstants.CHAR_SUCCESS:
      return {
        ...state,
        loading: false,
        charData: action.response.data.results,
        error: "",
      };
    case CharacterConstants.CHAR_FAILURE:
      return {
        ...state,
        loading: false,
        charData: [],
        error: action.error,
      };
      case CharacterConstants.CHAR_DETAILS_REQUEST:
        return{
            ...state,
            loading:true,
            charDetails:[],
            error:""
        }
      case CharacterConstants.CHAR_DETAILS_SUCCESS:
        return{
            ...state,
            loading:false,
            charDetails:action.response.data,
            error:""
        }
      case CharacterConstants.CHAR_DETAILS_FAILURE:
        return{
            ...state,
            loading:false,
            charDetails:[],
            error:action.error
        }
    default:
      return state;
  }
};
export default CharacterReducer;
