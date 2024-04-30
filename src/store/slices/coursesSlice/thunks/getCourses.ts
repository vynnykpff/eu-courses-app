import { CaseReducer, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { CourseExceptions } from '@constants';
import { CoursesService } from '@services';
import { setNormalizeCourses } from '@utils';
import { CoursesPayload, CoursesState, StoreAsyncThunk } from '@types';

const asyncThunk = createAsyncThunk('courses/getCourses', async function (_, { rejectWithValue }) {
  try {
    return await CoursesService.getCourses();
  } catch (error) {
    return rejectWithValue(CourseExceptions.DEFAULT);
  }
});

const storeHandler: CaseReducer<CoursesState, PayloadAction<CoursesPayload>> = (state, { payload }) => {
  state.courses = setNormalizeCourses(payload);
};

export const getCourses: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
