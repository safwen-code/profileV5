import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE_DESCRIPTION_REQUEST,
  GET_PROFILE_DESCRIPTION_SUCCESS,
  GET_PROFILE_DESCRIPTION_FAIL,
  GET_PROFILE_PROJECT_REQUEST,
  GET_PROFILE_PROJECT_SUCCESS,
  GET_PROFILE_PROJECT_FAIL,
  GET_PROFILE_SKILLPROF_REQUEST,
  GET_PROFILE_SKILLPROF_SUCCESS,
  GET_PROFILE_SKILLPROF_FAIL,
  GET_PROFILE_SKILLS_REQUEST,
  GET_PROFILE_SKILLS_SUCCESS,
  GET_PROFILE_SKILLS_FAIL,
} from '../constant/profileConst'

import { profile } from '../data'

export const getprofile = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_REQUEST })
    const data = profile.about // Simulated API call
    dispatch({ type: GET_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAIL, payload: 'Error fetching profile data' })
  }
}

export const getdescription = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_DESCRIPTION_REQUEST })
    const data = profile.description // Simulated API call
    dispatch({ type: GET_PROFILE_DESCRIPTION_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: GET_PROFILE_DESCRIPTION_FAIL,
      payload: 'Error fetching description',
    })
  }
}

export const getproject = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_PROJECT_REQUEST })
    const data = profile.project // Simulated API call
    dispatch({ type: GET_PROFILE_PROJECT_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: GET_PROFILE_PROJECT_FAIL,
      payload: 'Error fetching description',
    })
  }
}

export const getskillProf = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_SKILLPROF_REQUEST })
    const data = profile.professionalpath // Simulated API call
    dispatch({ type: GET_PROFILE_SKILLPROF_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: GET_PROFILE_SKILLPROF_FAIL,
      payload: 'Error fetching description',
    })
  }
}

export const getskills = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_SKILLS_REQUEST })
    const data = profile.skills // Simulated API call
    dispatch({ type: GET_PROFILE_SKILLS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: GET_PROFILE_SKILLS_FAIL,
      payload: 'Error fetching description',
    })
  }
}
