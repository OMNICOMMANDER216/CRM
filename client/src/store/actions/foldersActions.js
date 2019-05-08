/* eslint-disable func-names */
import action from "../actionTypes";
import FolderApi from "../../api/foldersApi";
import boardApi from "../../api/boardsApi";

export function loadFoldersSuccess(folders) {
  return {
    type: action.LOAD_FOLDERS_SUCCESS,
    folders
  };
}

export function addBoardSuccess(folder) {
  return {
    type: action.ADD_BOARD,
    folder
  };
}

export function updateBoardSuccess(folder) {
  return {
    type: action.UPDATE_BOARD,
    folder
  };
}

export function deleteBoardSuccess(folder) {
  return {
    type: action.DELETE_BOARD,
    folder
  };
}

export function loadFoldersFailed(message) {
  return {
    type: action.LOAD_FOLDERS_FAILED,
    message
  };
}

export function moveBoardFailed(message) {
  return {
    type: action.LOAD_FOLDERS_FAILED,
    message
  };
}

export function loadFolders() {
  return function(dispatch) {
    try {
      FolderApi.loadFolders().then(res =>
        dispatch(loadFoldersSuccess(res.data))
      );
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}

export function addBoard(board) {
  return function(dispatch) {
    try {
      boardApi.addBoard(board).then(res => dispatch(addBoardSuccess(res.data)));
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}

export function updateBoard(board) {
  return function(dispatch) {
    try {
      boardApi
        .updateBoard(board)
        .then(res => dispatch(updateBoardSuccess(res.data)));
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}
export function deleteBoard(board) {
  return function(dispatch) {
    try {
      boardApi
        .deleteBoardById(board._id)
        .then(res => dispatch(deleteBoardSuccess(res.data)));
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}

export function moveBoard(board, newFolderId) {
  return function(dispatch) {
    try {
      boardApi
        .moveBoard(board, newFolderId)
        .then(res => dispatch(loadFoldersSuccess(res.data)));
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}
