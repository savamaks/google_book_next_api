import React from "react";
import Layout from "../../components/layout/layout";
import style from "./basket.module.scss";
import CardBookBasket from "@/components/CardBookBasket/CardBookBasket";
import Image from "next/image";
import ava from "../../../public/images/a-wq-u-sd-ktl-2.png";
import styles from "../../components/CardBookBasket/CardBookBasket.module.scss";

const Basket = () => {
    return (
        <Layout>
            <div className={style.container}>
                <h1 className={style.text}>SHOPPING CART</h1>
                <table className={style.table}>
                    <tbody>
                        <tr>
                            <td className={style.table_box_title}>ITEM</td>
                            <td className={style.table_box_title}>QUANTITY</td>
                            <td className={style.table_box_title}>PRICE</td>
                            <td className={style.table_box_title}>DELIVERY</td>
                        </tr>
                        <CardBookBasket />
                        <CardBookBasket />
                        <CardBookBasket />
                        <CardBookBasket />
                        <CardBookBasket />
                        <CardBookBasket />
                    </tbody>
                </table>
                <p className={style.text}>TOTAL PRICE: $30.58</p>
            </div>
        </Layout>
    );
};

export default Basket;

{
    /* <div className={style.card}>
    <div className={style.card_box}>
        <Image className={style.card_img} src={ava} alt="" />
        <div className={style.card_boxDescription}>
            <p className={style.card_boxDescription_title}>The weight of things</p>
            <p className={style.card_boxDescription_author}>Marianne Fritz</p>
            <div className={style.card_boxDescription_boxRaiting}>
                <div className={style.boxRaiting_star}>star</div>
                <p className={style.boxRaiting_review}>353 reviews</p>
            </div>
        </div>
    </div>

    <div className={style.card_boxButton}>
        <button className={style.card_boxButton_minus}>-</button>
        <p className={style.card_boxButton_count}>0</p>
        <button className={style.card_boxButton_plus}>+</button>
    </div>
    <p className={style.card_price}>$18.23</p>
    <p className={style.card_delivery}>Shipping: delivery</p>
</div>; */
}
