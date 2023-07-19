import { BookType } from "@/type";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


const booksBasketAdapter = createEntityAdapter<BookType>({
    selectId: (entity) => entity.id,
});

const booksSlice = createSlice({
    name: "books",
    initialState: booksBasketAdapter.getInitialState(),
    reducers: {
        bookAdded: booksBasketAdapter.setOne,
        bookRemove: booksBasketAdapter.removeOne,
        booksReceived(state, action) {
            booksBasketAdapter.setAll(state, action.payload.books);
        },
    },
});

export default booksSlice.reducer;

export const selectors = booksBasketAdapter.getSelectors((state:any) => state.booksSlice);

export const { bookAdded, bookRemove } = booksSlice.actions;

