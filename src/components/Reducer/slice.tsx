import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchBook } from "../RequestApi/RequestApi";

type actionTypeData = {
    payload: [];
    type: string;
};
type ActionTypePayload = {
    payload: string;
    type: string;
};

const state = createSlice({
    name: "reducers",
    initialState: {
        logIn: false,
        click: false,
        positionAuthProfile: {
            x: 0,
            y: 0,
        },
        statusLoading: "",
        dataApi: [],
        error: "",
        categoriesBook: "Architecture",
        bookBasket:[],
    },
    reducers: {
        changeStateBoolean(state, action: ActionTypePayload) {
            const { payload } = action;
            state[payload] = !state[payload];
        },
        statePositionAuthProfile(state, action: any) {
            const { payload } = action;
            state.positionAuthProfile.x = payload[0];
            state.positionAuthProfile.y = payload[1];
        },
        changeCategoriesBook(state, action: ActionTypePayload) {
            state.categoriesBook = action.payload;
        },
        changeBasket(state, action) {
        },
    },
    extraReducers: {
        [fetchBook.pending]: (state) => {
            state.statusLoading = "loading";
        },
        [fetchBook.fulfilled]: (state, action: actionTypeData) => {
            state.dataApi = action.payload;
            state.statusLoading = "true";
        },
        [fetchBook.rejected]: (state) => {
            state.statusLoading = "";
            state.error = "error";
        },
    },
});
export default state.reducer;

export const { statePositionAuthProfile, changeStateBoolean, changeCategoriesBook, changeBasket } = state.actions;
