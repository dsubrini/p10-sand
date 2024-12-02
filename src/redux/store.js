import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/auth';

export default configureStore({
  reducer: {
    auth: authSlice,
  },
});
