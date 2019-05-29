/* eslint-disable func-names */
import action from '../actionTypes';
import FolderApi from '../../api/foldersApi';
import BoardApi from '../../api/boardsApi';

export function loadFoldersSuccess(folders) {
  return {
    type: action.LOAD_FOLDERS_SUCCESS,
    folders,
  };
}

export function addFolderSuccess(folder) {
  return {
    type: action.ADD_FOLDER_SUCCESS,
    folder,
  };
}

export function updateFolderSuccess(folder) {
  return {
    type: action.UPDATE_FOLDER_SUCCESS,
    folder,
  };
}

export function removeFolderSuccess(folder) {
  return {
    type: action.REMOVE_FOLDER_SUCCESS,
    folder,
  };
}

export function addBoardSuccess(folder) {
  return {
    type: action.ADD_BOARD,
    folder,
  };
}

export function updateBoardSuccess(folder) {
  return {
    type: action.UPDATE_BOARD,
    folder,
  };
}

export function deleteBoardSuccess(folder) {
  return {
    type: action.REMOVE_BOARD,
    folder,
  };
}

export function loadFoldersFailed(message) {
  return {
    type: action.LOAD_FOLDERS_FAILED,
    message,
  };
}

export function moveBoardFailed(message) {
  return {
    type: action.LOAD_FOLDERS_FAILED,
    message,
  };
}

export function loadFolders() {
  return function (dispatch) {
    try {
      FolderApi.loadFolders().then((res) => {
        if (res.data) {
          dispatch(loadFoldersSuccess(res.data));
        }
      });
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}

export function addFolder(folder) {
  return function (dispatch) {
    try {
      FolderApi.addFolder(folder).then(res => dispatch(addBoardSuccess(res.data)));
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}

export function updateFolder(folder) {
  return function (dispatch) {
    try {
      FolderApi
        .updateFolder(folder)
        .then(res => dispatch(updateFolderSuccess(res.data)));
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}

export function removeFolder(folder) {
  return function (dispatch) {
    try {
      console.log(folder);
      FolderApi
        .removeFolderById(folder._id)
        .then(res => dispatch(removeFolderSuccess(folder)));
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}

export function addBoard(board) {
  return function (dispatch) {
    try {
      BoardApi.addBoard(board).then(res => dispatch(addBoardSuccess(res.data)));
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}

export function updateBoard(board) {
  return function (dispatch) {
    try {
      BoardApi
        .updateBoard(board)
        .then(res => dispatch(updateBoardSuccess(res.data)));
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}
export function deleteBoard(board) {
  return function (dispatch) {
    try {
      BoardApi
        .deleteBoardById(board._id)
        .then(res => dispatch(deleteBoardSuccess(res.data)));
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}

export function moveBoard(board, newFolderId) {
  return function (dispatch) {
    try {
      BoardApi
        .moveBoard(board, newFolderId)
        .then(res => dispatch(loadFoldersSuccess(res.data)));
    } catch (error) {
      return dispatch(loadFoldersFailed(error.message));
    }
  };
}
