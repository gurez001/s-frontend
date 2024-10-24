import axiosInstance from "../lib/AxiosInstance";
import { getSiteURL } from "../lib/get-site-url";
import { axios_error } from "../lib/axios_error";
import { others_method, get_method } from "../lib/headers";
import {
  ADD_BRANCH_DETAILS_FAILURE,
  ADD_BRANCH_DETAILS_REQUEST,
  ADD_BRANCH_DETAILS_SUCCESS,
  FETCH_BRANCH_DETAILS_FAILURE,
  FETCH_BRANCH_DETAILS_REQUEST,
  FETCH_BRANCH_DETAILS_SUCCESS,
  FETCH_BRANCH_ERROR,
  FETCH_BRANCH_FAILURE,
  FETCH_BRANCH_REQUEST,
  FETCH_BRANCH_SUCCESS,
  UPDATE_BRANCH_DETAILS_FAILURE,
  UPDATE_BRANCH_DETAILS_REQUEST,
  UPDATE_BRANCH_DETAILS_SUCCESS,
} from "../lib/redux/constants/branch_actionTypes";
import {
  FETCH_SEARCH_ERROR,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
} from "lib/redux/constants/search_actionTypes";

export const add_branch = (branch_data, uuid) => async (dispatch) => {
  try {
    dispatch({ type: ADD_BRANCH_DETAILS_REQUEST });
    const { data } = await axiosInstance.post(
      `${getSiteURL()}api/v1/action-branch`,
      { branch_data, uuid },
      others_method()
    );

    dispatch({ type: ADD_BRANCH_DETAILS_SUCCESS, payload: data.branch });
  } catch (error) {
    dispatch({
      type: ADD_BRANCH_DETAILS_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const update_branch = (branch_data, id) => async (dispatch) => {
  try {
    console.log(branch_data, id);
    dispatch({ type: UPDATE_BRANCH_DETAILS_REQUEST });

    const { data } = await axiosInstance.put(
      `${getSiteURL()}api/v1/action-branch/${id}`,
      { branch_data },
      others_method()
    );

    dispatch({ type: UPDATE_BRANCH_DETAILS_SUCCESS, payload: data.branch });
  } catch (error) {
    dispatch({
      type: UPDATE_BRANCH_DETAILS_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const get_all_branch =
  (currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: FETCH_BRANCH_REQUEST });
      let link = `${getSiteURL()}api/v1/branch?page=${currentPage}`;

      const { data } = await axiosInstance.get(link, get_method());
      dispatch({ type: FETCH_BRANCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: FETCH_BRANCH_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const search_all_branch =
  (currentPage = 1, trimmedValue = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: FETCH_SEARCH_REQUEST });
      let link = `${getSiteURL()}api/v1/branch?page=${0}&keyword=${null}`;

      if (trimmedValue.length > 1) {
        link = `${getSiteURL()}api/v1/branch?page=${currentPage}&keyword=${trimmedValue}`;
      }

      const { data } = await axiosInstance.get(link, get_method());
      dispatch({ type: FETCH_SEARCH_SUCCESS, payload: data.branch });
    } catch (error) {
      dispatch({
        type: FETCH_SEARCH_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const get_branch_details = (branch_id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_BRANCH_DETAILS_REQUEST });
    const { data } = await axiosInstance.get(
      `${getSiteURL()}api/v1/branch?branch_id=${branch_id}`,
      get_method()
    );

    dispatch({ type: FETCH_BRANCH_DETAILS_SUCCESS, payload: data.branch[0] });
  } catch (error) {
    dispatch({
      type: FETCH_BRANCH_DETAILS_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: FETCH_BRANCH_ERROR });
};
