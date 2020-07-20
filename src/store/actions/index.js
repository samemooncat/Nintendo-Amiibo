import {
  AMIIBO_FAILED,
  AMIIBO_REQUEST,
  AMIIBO_SUCCESS,
} from "./actionsTypes/index";

export const amiiboRequest = (name) => ({ type: AMIIBO_REQUEST, name });
export const amiiboSuccess = (data) => ({ type: AMIIBO_SUCCESS, data });
export const amiiboFailed = (error) => ({ type: AMIIBO_FAILED, error });
