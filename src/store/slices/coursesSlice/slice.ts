import { ServerExceptionType } from '@constants';
import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CourseFields, CoursesState, SingleCoursePayload } from '@types';
import { getSlugifyLink } from '@utils';
import coursesSliceThunks from './thunks';

const initialState: CoursesState = {
  courses: [] as CourseFields[],
  singleCourse: {} as CourseFields,
  isPending: false,
  error: null,
};

export const coursesSlice = createSlice({
  name: 'coursesSlice',
  initialState,
  reducers: {
    setSingleCourse: (state, { payload }: PayloadAction<SingleCoursePayload>) => {
      const res = state.courses.find(course => getSlugifyLink(course.title) === getSlugifyLink(payload));
      res ? (state.singleCourse = res) : res;
    },
  },
  extraReducers: builder => {
    for (const thunk of coursesSliceThunks) {
      builder.addCase(thunk.asyncThunk.pending, state => {
        state.isPending = true;
        state.error = null;
      });
      builder.addCase(thunk.asyncThunk.rejected, (state, { payload }) => {
        state.isPending = false;
        state.error = (payload as string) ?? ServerExceptionType.DEFAULT;
      });
      builder.addCase(thunk.asyncThunk.fulfilled, (state, action) => {
        const storeHandler = thunk.storeHandler as CaseReducer;
        state.isPending = false;
        state.error = null;
        storeHandler(state, action);
      });
    }
  },
});

export const { actions: coursesActions, reducer: coursesReducer } = coursesSlice;
