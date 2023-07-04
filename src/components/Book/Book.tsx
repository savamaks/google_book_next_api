import React from "react";
import Image from "next/image";
import style from "./Book.module.scss";
import image from "../../../public/images/a-wq-u-sd-ktl-2.png";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../Reducer/store";
import { changeBasket } from "../Reducer/slice";

const Book = ({ book }: any) => {
    // console.log(book);
    const dispatch = useDispatch();
    const {} = useAppSelector((state) => state.reducer);

    // console.log(book.volumeInfo.authors?.join(', '));
    // let authors = book.volumeInfo.authors.join(', ');
    const addBookBasket = () => {
        dispatch(changeBasket(book))
    };
    let sale = book.saleInfo.saleability.split("_").join(" ");
    return (
        <div key={book.id} className={style.container}>
            <Image priority={true} className={style.container_img} src={image} alt="in" />
            <div className={style.container_box}>
                <p className={style.box_author}>{book.volumeInfo.authors?.join(", ")}</p>
                <p className={style.box_title}>{book.volumeInfo.title}</p>
                <div className={style.box_raiting}>
                    <div className={style.box_raiting_star}>raiting</div>
                    <div className={style.box_raiting_review}>riwiew</div>
                </div>
                <p className={style.box_description}>{book.volumeInfo.description ? book.volumeInfo.description?.slice(0, 82) + "..." : ""}</p>
                <p className={style.box_price}>
                    {book.saleInfo.listPrice ? Math.round(book.saleInfo.listPrice?.amount) : sale} {book.saleInfo.listPrice?.currencyCode}
                </p>
                <button className={style.box_button} onClick={addBookBasket}>
                    buy
                </button>
            </div>
        </div>
    );
};

export default Book;
