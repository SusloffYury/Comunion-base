import { IUsers } from '../models/IUsers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
  users: IUsers[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: userState = {
  users: [],
  isLoading: false,
  error: 'Hello',
  count: 0,
};

export const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export default userSlice.reducer;
