import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchBook } from "../RequestApi/RequestApi";
import { BookType } from "@/type";

const dataBook = createEntityAdapter({
    selectId: (entity: BookType) => entity.id,
    sortComparer: false,
});
type ActionTypePayload = {
    payload: string;
    type: string;
};
type ActionTypePayloadNumber = {
    payload: number;
    type: string;
};
type ActionTypePayloadArray = {
    payload: Array<number>;
    type: string;
};

const booksApiSlice = createSlice({
    name: "booksApi",
    initialState: dataBook.getInitialState({
        firstLoading: true,
        statusLoading: "",
        error: "",
        categoriesBook: "Architecture",
        countPage: 1,
        countBookBasket: 0,
        logIn: false,
        click: false,
        positionAuthProfile: {
            x: 0,
            y: 0,
        },
    }),
    reducers: {
        removeAllBook: dataBook.removeAll,
        addBook: dataBook.addMany,
        changeCategoriesBook(state, action: ActionTypePayload) {
            state.categoriesBook = action.payload;
        },
        changeCountPage(state, action: ActionTypePayloadNumber) {
            state.countPage = action.payload;
        },
        changeCountBookBasket(state, action) {
            state.countBookBasket = action.payload;
        },
        changeStateBoolean(state:any, action: ActionTypePayload) {
            const { payload } = action;
            state[payload] = !state[payload];
        },
        statePositionAuthProfile(state, action: ActionTypePayloadArray) {
            const { payload } = action;
            state.positionAuthProfile.x = payload[0];
            state.positionAuthProfile.y = payload[1];
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchBook.pending, (state) => {
            state.statusLoading = "loading";
        });

        builder.addCase(fetchBook.fulfilled, (state, action) => {
            const items = action.payload.data.items;
            dataBook.upsertMany(state, items);
            state.statusLoading = "true";
        });
        builder.addCase(fetchBook.rejected, (state) => {
            state.statusLoading = "";
            state.error = "error";
        });
    },
});

export default booksApiSlice.reducer;

export const selectorsAdapter = dataBook.getSelectors((state: any) => state.booksApiSlice);

export const { removeAllBook, addBook } = booksApiSlice.actions;

export const { changeCountBookBasket, changeStateBoolean, changeCategoriesBook, statePositionAuthProfile, changeCountPage } = booksApiSlice.actions;
