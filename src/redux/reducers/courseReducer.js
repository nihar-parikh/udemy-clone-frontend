import { createReducer } from '@reduxjs/toolkit';

export const courseReducer = createReducer(
  {
    courses: [],
    lectures: [],
  },
  {
    allCoursesStart: state => {
      state.loading = true;
    },
    allCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    allCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getCourseStart: state => {
      state.loading = true;
    },
    getCourseSuccess: (state, action) => {
      state.loading = false;
      state.lectures = action.payload;
    },
    getCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addToPlayListStart: state => {
      state.loading = true;
    },
    addToPlayListSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addToPlayListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
