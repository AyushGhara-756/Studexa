import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id?: string;
  email?: string;
  name?: string;
  contact?: string;
  role?: string;
  [key: string]: any;
}

interface AuthState {
  user: User | null;
  token?: string;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  theme: 'light' | 'dark';
}

const initialState: AuthState = {
  user: null,
  token: undefined,
  isAuthenticated: false,
  loading: false,
  error: null,
  theme: 'light',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User; token?: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = undefined;
      state.isAuthenticated = false;
      state.error = null;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
  },
});

export const { setUser, setLoading, setError, clearError, logout, toggleTheme, setTheme } = authSlice.actions;
export default authSlice.reducer;
