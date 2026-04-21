import { createSelector } from "@reduxjs/toolkit";
import { IReducers } from "Redux";

/* Base selector */
const authState = (state: IReducers) => state.auth;

/* Simple selectors */
export const selectAuthUser = createSelector(
    authState,
    s => s.user
);

export const selectLoginDetails = createSelector(
    authState,
    s => s.loginDetails
);

export const selectIsLoggedIn = createSelector(
    authState,
    s => s.isLoggedIn
);

export const selectAuthIsLoading = createSelector(
    authState,
    s => s.isLoading
);
