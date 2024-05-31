import { setTheme } from "../../store/theme/theme-actions";



const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'light',
  reducers: {
    setTheme: (_, action) => action.payload,
  }
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducers;