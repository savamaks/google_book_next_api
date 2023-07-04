// import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// const bookAdapter = createEntityAdapter();

// const state = createSlice({
//     name: "adapter",
//     initialState: bookAdapter.getInitialState(),
//     reducers: {},
// });
import { createEntityAdapter, createSlice, configureStore } from "@reduxjs/toolkit";

type Book = { bookId: string; title: string };

const booksAdapter = createEntityAdapter<Book>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (book) => book.bookId,

    // Keep the "all IDs" array sorted based on book titles
    sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const booksSlice = createSlice({
    name: "books",
    initialState: booksAdapter.getInitialState(),
    reducers: {
        bookAdded: booksAdapter.addOne,
        booksReceived(state, action) {
            // Or, call them as "mutating" helpers in a case reducer
            booksAdapter.setAll(state, action.payload.books);
        },
    },
});

const store = configureStore({
    reducer: {
        books: booksSlice.reducer,
    },
});

type RootState = ReturnType<typeof store.getState>;

console.log(store.getState().books);
// { ids: [], entities: {} }

// Can create a set of memoized selectors based on the location of this entity state
const booksSelectors = booksAdapter.getSelectors<RootState>((state) => state.books);

// And then use the selectors to retrieve values
const allBooks = booksSelectors.selectAll(store.getState());
