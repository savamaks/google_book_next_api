import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBook: any = createAsyncThunk(
    "requestApi",
    async (arg:any) => {
        const res = await fetch(`/api/books?subject=${arg.subject}&page=${arg.page}&maxResults=${arg.maxResult}`);
        if (res.ok) {
        }
        const data = await res.json();
        return data;
    }
);
