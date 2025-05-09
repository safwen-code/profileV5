import {
  GET_PROFILE_DESCRIPTION_FAIL,
  GET_PROFILE_DESCRIPTION_REQUEST,
  GET_PROFILE_DESCRIPTION_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE_PROJECT_FAIL,
  GET_PROFILE_PROJECT_REQUEST,
  GET_PROFILE_PROJECT_SUCCESS,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SKILLPROF_FAIL,
  GET_PROFILE_SKILLPROF_REQUEST,
  GET_PROFILE_SKILLPROF_SUCCESS,
  GET_PROFILE_SKILLS_FAIL,
  GET_PROFILE_SKILLS_REQUEST,
  GET_PROFILE_SKILLS_SUCCESS,
  GET_PROFILE_SUCCESS,
} from '../constant/profileConst'

export const profileReducer = (
  state = {
    about: {},
    description: {},
    project: '',
    professionalpath: '',
    skills: '',
  },
  action,
) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return { ...state, loading: true, about: {} }
    case GET_PROFILE_DESCRIPTION_REQUEST:
      return { ...state, loading: true, description: {} }
    case GET_PROFILE_PROJECT_REQUEST:
      return { ...state, loading: true, project: '' }
    case GET_PROFILE_SKILLPROF_REQUEST:
      return { ...state, loading: true, professionalpath: '' }
    case GET_PROFILE_SKILLS_REQUEST:
      return { ...state, loading: true, skills: '' }

    case GET_PROFILE_SUCCESS:
      return { ...state, loading: false, about: action.payload }
    case GET_PROFILE_DESCRIPTION_SUCCESS:
      return { ...state, loading: false, description: action.payload }
    case GET_PROFILE_PROJECT_SUCCESS:
      return { ...state, loading: false, project: action.payload }
    case GET_PROFILE_SKILLPROF_SUCCESS:
      return { ...state, loading: false, professionalpath: action.payload }
    case GET_PROFILE_SKILLS_SUCCESS:
      return { ...state, loading: false, skills: action.payload }

    case GET_PROFILE_FAIL:
    case GET_PROFILE_DESCRIPTION_FAIL:
    case GET_PROFILE_PROJECT_FAIL:
    case GET_PROFILE_SKILLPROF_FAIL:
    case GET_PROFILE_SKILLS_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
