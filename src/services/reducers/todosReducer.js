import {
  GET_TODOS_FAIL,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/todosConstant";

const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        todos: action.payload,
        isLoading: false,
        error: null,
      };
    case GET_TODOS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todosReducer;
