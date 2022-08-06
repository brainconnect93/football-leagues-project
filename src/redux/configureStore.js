import { configureStore } from '@reduxjs/toolkit';
import detailSlice from './Details/details';
import leagueSlice from './Home/home';

const store = configureStore({
  reducer: {
    leagues: leagueSlice,
    details: detailSlice,
  },
});

export default store;
