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

// export const getStaticProps = async () => {
//     const res = await fetch("http://localhost:3000/api/books?subject=Fiction&page=1&maxResults=6");
//     if (res.ok) {
//     }
//     const repo = await res.json();

//     return { props: { repo } };
// };
