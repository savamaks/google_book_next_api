import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

type Book = { bookId: string; title: string };

const booksAdapter = createEntityAdapter<Book>({
    selectId: entity => entity.id,
});

const booksSlice = createSlice({
    name: "books",
    initialState: booksAdapter.getInitialState(),
    reducers: {
        bookAdded: booksAdapter.setOne,
        bookRemove: booksAdapter.removeOne,

        booksReceived(state, action) {
            booksAdapter.setAll(state, action.payload.books);
        },
    },
});



export default booksSlice.reducer

export const {bookAdded,bookRemove} = booksSlice.actions