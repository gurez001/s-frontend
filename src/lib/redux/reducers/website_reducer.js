import {
  ADD_WEBSITE_DETAILS_FAILURE,
  ADD_WEBSITE_DETAILS_REQUEST,
  ADD_WEBSITE_DETAILS_RESET,
  ADD_WEBSITE_DETAILS_SUCCESS,
  FETCH_WEBSITE_DETAILS_FAILURE,
  FETCH_WEBSITE_DETAILS_REQUEST,
  FETCH_WEBSITE_DETAILS_SUCCESS,
  FETCH_WEBSITE_ERROR,
  FETCH_WEBSITE_FAILURE,
  FETCH_WEBSITE_REQUEST,
  FETCH_WEBSITE_SUCCESS,
  UPDATE_WEBSITE_DETAILS_FAILURE,
  UPDATE_WEBSITE_DETAILS_REQUEST,
  UPDATE_WEBSITE_DETAILS_RESET,
  UPDATE_WEBSITE_DETAILS_SUCCESS,
} from "../constants/website_actionTypes";

export const website_reducer = (
  state = { website: [], website_details: {} },
  action
) => {
  switch (action.type) {
    case FETCH_WEBSITE_REQUEST:
      return {
        ...state,
        loading: true,
      };
      
    case UPDATE_WEBSITE_DETAILS_REQUEST:
    case ADD_WEBSITE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEBSITE_DETAILS_REQUEST:
      return {
        ...state,
        loading_: true,
      };
    case FETCH_WEBSITE_SUCCESS:
      return {
        ...state,
        loading: false,
        website: action.payload.web_data,
        count_website: action.payload.count_website,
        active_count: action.payload.active_count,
        inactive_count: action.payload.inactive_count,
        resultPerpage: action.payload.resultPerpage,
      };
    case UPDATE_WEBSITE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        update: true,
      };
    case ADD_WEBSITE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case FETCH_WEBSITE_DETAILS_SUCCESS:
      return {
        ...state,
        loading_: false,
        website_details: action.payload,
      };
    case FETCH_WEBSITE_FAILURE:
    case FETCH_WEBSITE_DETAILS_FAILURE:
    case UPDATE_WEBSITE_DETAILS_FAILURE:
    case ADD_WEBSITE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        loading_: false,
        update: null,
        success: null,
        error: action.payload,
      };
    case UPDATE_WEBSITE_DETAILS_RESET:
    case ADD_WEBSITE_DETAILS_RESET:
      return {
        ...state,
        loading: false,
        success: null,
        update: null,
        website_details: null,
      };

    case FETCH_WEBSITE_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
