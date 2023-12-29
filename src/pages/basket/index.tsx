import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import style from "./basket.module.scss";
import CardBookBasket from "@/components/CardBookBasket/CardBookBasket";
import { useAppSelector } from "@/components/Reducer/store";
import { useSelector } from "react-redux";
import { selectors } from "@/components/Reducer/sliceBookBasket";
import { EntityId } from "@reduxjs/toolkit";

const Basket = () => {
    const books: any = useAppSelector((state) => state.booksSlice);
    const [totalPrice, setTotalPrice] = useState(0);
    const countBookBasket = useSelector(selectors.selectTotal);
    // let currencyCode: string = "";
    const [currencyCode, setCurrencyCode] = useState('');
    useEffect(() => {
        let price = 0;
        books.ids.map((el: EntityId) => {
            console.log(typeof el);
            if (books.entities[el].saleInfo?.listPrice?.amount) {
                let priceBooks = books.entities[el].saleInfo.listPrice?.amount * books.entities[el].count;
                price = price + priceBooks;
                if(currencyCode ===''){
                    setCurrencyCode(books.entities[el].saleInfo.listPrice?.currencyCode) 
                }
            }
        });
        setTotalPrice(price);

        if (books.ids.length === 0) {
            setTotalPrice(0);
        }
    },[books.ids, books.entities, currencyCode]);
    return (
        <Layout>
            <div className={style.container}>
                <h1 className={style.text}>SHOPPING CART</h1>
                {countBookBasket > 0 ? (
                    <table className={style.table}>
                        <tbody>
                            <tr>
                                <td className={style.table_box_title}>ITEM</td>
                                <td className={style.table_box_title}>QUANTITY</td>
                                <td className={style.table_box_title}>PRICE</td>
                                <td className={style.table_box_title}>DELIVERY</td>
                            </tr>
                            {books.ids.map((el: any, index: number) => {
                                return <CardBookBasket key={index} book={books.entities[el]} />;
                            })}
                        </tbody>
                    </table>
                ) : (
                    ""
                )}
                <p className={style.text}>
                    {}
                    {totalPrice > 0 ? `TOTAL PRICE: ${totalPrice.toFixed(2)} ${currencyCode !==''?currencyCode:'a'}` : countBookBasket > 0 ? "" : "Basket is empty..."}
                </p>
            </div>
        </Layout>
    );
};

export default Basket;
