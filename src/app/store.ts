import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import workflowReducer from '../features/workflow/workflowSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    workflow: workflowReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;