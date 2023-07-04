import React from "react";
import Image, { StaticImageData } from "next/image";
import style from "./Book.module.scss";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../Reducer/store";
import { changeBasket } from "../Reducer/slice";
import { bookAdded } from "../Reducer/sliceBook";
import { validateSrc } from "../func/exportFunc";

const Book = ({ book }: any) => {
    // console.log(book.volumeInfo);
    const dispatch = useDispatch();
    const {} = useAppSelector((state) => state.reducer);

    const srcImage: string = validateSrc(book.volumeInfo.imageLinks);

    const addBookBasket = () => {
        let bookBasket = {
            ...book,
            count: 1,
        };
        dispatch(bookAdded(bookBasket));
    };

    const imageLoader = ({ src }: any) => {
        return `${src}`;
    };

    let price = book.saleInfo.saleability.split("_").join(" ");

    return (
        <div key={book.id} className={style.container}>
            <Image unoptimized loader={imageLoader} priority={true} width={50} height={40} className={style.container_img} src={srcImage} alt="in" />
            <div className={style.container_box}>
                <p className={style.box_author}>{book.volumeInfo.authors?.join(", ")}</p>
                <p className={style.box_title}>{book.volumeInfo.title}</p>
                <div className={style.box_raiting}>
                    <div className={style.box_raiting_star}>{book.volumeInfo.averageRating}</div>
                    <div className={style.box_raiting_review}>{book.volumeInfo.raitingCount?book.volumeInfo.raitingCount+'riwiew':''}</div>
                </div>
                <p className={style.box_description}>{book.volumeInfo.description ? book.volumeInfo.description?.slice(0, 82) + "..." : ""}</p>
                <p className={style.box_price}>
                    {book.saleInfo.listPrice ? Math.round(book.saleInfo.listPrice?.amount) : price} {book.saleInfo.listPrice?.currencyCode}
                </p>
                <button className={style.box_button} onClick={addBookBasket}>
                    buy
                </button>
            </div>
        </div>
    );
};

export default Book;
