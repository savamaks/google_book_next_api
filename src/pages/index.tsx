import Book from "@/components/Book/Book";
import Layout from "@/components/layout/layout";
import Navigation from "@/components/Navigation/Navigation";
import { useAppSelector } from "@/components/Reducer/store";
import { fetchBook } from "@/components/RequestApi/RequestApi";
import Sliders from "@/components/Sliders/Sliders";
import style from "@/styles/Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/Loader/Loader";
import { GetServerSideProps } from "next";
import { addBook, changeCountPage, changeStateBoolean, selectorsAdapter } from "@/components/Reducer/sliceBookApi";
import { EntityId, EntityState } from "@reduxjs/toolkit";
import { BookType, HomeType } from "@/type";

export const getServerSideProps: GetServerSideProps<{ data: HomeType }> = async () => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject=Architecture&page=1&maxResults=6`);
    const data = await res.json();
    return { props: { data } };
};

export default function Home({ data }: HomeType) {
    const dispatch = useDispatch();
    const { categoriesBook, statusLoading, countPage, firstLoading } = useAppSelector((state) => state.booksApiSlice);

    const countBookApi:number = useSelector(selectorsAdapter.selectTotal);
    const booksApi:EntityState<BookType> = useAppSelector((state) => state.booksApiSlice);

    const loadMoreBook = () => {
        let count = countPage + 1;
        if (firstLoading) {
            dispatch(addBook(data.items));
            dispatch(changeStateBoolean("firstLoading"));
        }
        dispatch(changeCountPage(count));
        dispatch(fetchBook({ subject: categoriesBook, page: count, maxResult: 6 }));
    };

    return (
        <Layout>
            <Sliders />
            <div className={style.container}>
                <Navigation />
                <div className={style.box_book}>
                    <div className={style.box_book_block}>
                        {firstLoading
                            ? data.items.map((book:any, index: number) => {
                                  return <Book key={index} book={book} />;
                              })
                            : countBookApi !== 0
                            ? booksApi.ids.map((id: EntityId, index: number) => {
                                  return <Book key={index} book={booksApi.entities[id]} />;
                              })
                            : ""}
                    </div>

                    {statusLoading === "loading" ? (
                        <Loader />
                    ) : (
                        <button onClick={loadMoreBook} className={style.box_book__button}>
                            Load more
                        </button>
                    )}
                </div>
            </div>
        </Layout>
    );
}
