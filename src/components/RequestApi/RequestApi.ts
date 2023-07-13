import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBook: any = createAsyncThunk(
    "requestApi",
    async (arg) => {
        const res = await fetch(`http://localhost:3000/api/books?subject=${arg.subject}&page=${arg.page}&maxResults=${arg.maxResult}`);
        if (res.ok) {
        }
        const data = await res.json();
        return data;
    }
);
