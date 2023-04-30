import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { serchTextAction } from '../store/searchText/searchText.slice';
import { formSubmissionAction } from '../store/formSubmission/formSubmission.slice';

const allActions = {
  ...serchTextAction,
  ...formSubmissionAction,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
