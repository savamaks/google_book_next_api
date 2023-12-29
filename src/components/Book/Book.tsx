import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import style from "./Book.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../Reducer/store";
import { bookAdded, bookRemove, selectors } from "../Reducer/sliceBookBasket";
import { validateSrc } from "../func/exportFunc";
import { EntityId } from "@reduxjs/toolkit";
import {  BookType } from "@/type";

const Book = ({ book }: any): JSX.Element => {
    const dispatch = useDispatch();
    const {} = useAppSelector((state) => state.booksApiSlice);
    const [buy, setBuy] = useState(false);
    const books = useSelector(selectors.selectEntities);
    const counts = useSelector(selectors.selectIds);

    const srcImage: string = validateSrc(book.volumeInfo?.imageLinks);

    useEffect(() => {
        counts.map((el: EntityId) => {
            if (book.id === el) {
                setBuy(true);
            }
        });
    }, );

    const addBookBasket = () => {
        if (!buy) {
            let bookBasket: BookType = {
                ...book,
                count: 1,
                buy: true,
            };
            dispatch(bookAdded(bookBasket));
        } else {
            let bookBasket = {
                ...book,
                count: 0,
                buy: false,
            };
            dispatch(bookRemove(book.id));

            setBuy(false);
        }
    };

    type ImageSrc = {
        src: string;
    };
    const imageLoader = ({ src }: ImageSrc) => {
        return `${src}`;
    };

    let price = book.saleInfo?.saleability.split("_").join(" ");

    return (
        <div key={book.id} className={style.container}>
            <Image
                loader={imageLoader}
                unoptimized={true}
                priority={true}
                width={50}
                height={40}
                className={style.container_img}
                src={srcImage}
                alt="in"
            />
            <div className={style.container_box}>
                <p className={style.box_author}>{book.volumeInfo?.authors?.join(", ")}</p>
                <p className={style.box_title}>{book.volumeInfo?.title}</p>
                <div className={style.box_raiting}>
                    <div className={style.box_raiting_star}>{book.volumeInfo?.averageRating}</div>
                    <div className={style.box_raiting_review}>{book.volumeInfo?.raitingCount ? book.volumeInfo.raitingCount + "riwiew" : ""}</div>
                </div>
                <p className={style.box_description}>{book.volumeInfo?.description ? book.volumeInfo.description?.slice(0, 82) + "..." : ""}</p>
                <p className={style.box_price}>
                    {book.saleInfo?.listPrice ? Math.round(book.saleInfo?.listPrice?.amount) : price} {book.saleInfo?.listPrice?.currencyCode}
                </p>
                <button className={`${style.box_button} ${buy ? style.box_inBasket : ""}`} onClick={addBookBasket}>
                    {buy ? "in the cart" : "buy"}
                </button>
            </div>
        </div>
    );
};

export default Book;
