import { combineReducers } from 'redux';

import { GuestSessionReducer } from './GuestSessionReducer';
import { RequestTokenReducer } from './RequestTokenReducer';
import { SessionReducer } from './SessionReducer';
import { ApiConfReducer } from './ApiConfReducer';
import { PopularMoviesReducer } from './PopularMoviesReducer';
import { PopularTvShowsReducer } from './PopularTvShowsReducer';
import { MovieCreditsReducer } from './MovieCreditsReducer';
import { MovieDetailsReducer } from './MovieDetailsReducer';
import { AccountInfoReducer } from './AccountInfoReducer';

export const AppReducer = combineReducers({
    guestSessionReducer: GuestSessionReducer,
    requestTokenReducer: RequestTokenReducer,
    sessionReducer: SessionReducer,
    apiConfReducer: ApiConfReducer,
    popularMoviesReducer: PopularMoviesReducer,
    popularTvShowsReducer: PopularTvShowsReducer,
    movieCreditsReducer: MovieCreditsReducer,
    movieDetailsReducer: MovieDetailsReducer,
    accountInfoReducer: AccountInfoReducer
});