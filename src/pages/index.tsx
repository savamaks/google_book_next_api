import Book from "@/components/Book/Book";
import Layout from "@/components/layout/layout";
import Navigation from "@/components/Navigation/Navigation";
import { useAppSelector } from "@/components/Reducer/store";
import { fetchBook } from "@/components/RequestApi/RequestApi";
import Sliders from "@/components/Sliders/Sliders";
import style from "@/styles/index.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
    const dispatch = useDispatch();
    const { dataApi,categoriesBook } = useAppSelector((state) => state.reducer);
    
    useEffect(() => {
        dispatch(fetchBook({ subject: categoriesBook, page: 1, maxResult: 10 }));
    }, [categoriesBook]);
    return (
        <Layout>
            <Sliders />
            <div className={style.container}>
                <Navigation />
                <div className={style.box_book}>
                    {dataApi.data?.items.map((book:any,index:number)=>{
                        return <Book key={index} book={book}/>
                    })}
                   
                    <button className={style.box_book__button}>Load more</button>
                </div>
            </div>
        </Layout>
    );
}
