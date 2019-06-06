import actions from '../actionTypes';
import initialState from './initialState';

export default function folderReducer(state = initialState.folders, action) {
  switch (action.type) {
    case actions.LOAD_FOLDERS_SUCCESS:
      return action.folders.sort((folder1, folder2) => folder1.createdAt.localeCompare(folder2.createdAt));

    case actions.ADD_FOLDER_SUCCESS:
    case actions.UPDATE_FOLDER_SUCCESS:
    case actions.UPDATE_BOARD:
    case actions.ADD_BOARD:
    case actions.REMOVE_BOARD:
      return [...state.filter(folder => folder._id !== action.folder._id), action.folder].sort((folder1, folder2) => folder1.createdAt.localeCompare(folder2.createdAt));

    case actions.REMOVE_FOLDER_SUCCESS:
      return [...state.filter(folder => folder._id !== action.folder._id)].sort((folder1, folder2) => folder1.createdAt.localeCompare(folder2.createdAt));

    default:
      return state;
  }
}
