import React from "react";
import styles from "./CardBookBasket.module.scss";
import Image from "next/image";
import ava from "../../../public/images/a-wq-u-sd-ktl-2.png";

const CardBookBasket = () => {
    return (
        <tr className={styles.box} >
            <td className={styles.card}>
                <Image className={styles.card_img} src={ava} alt="" />
                <div className={styles.card_boxDescription}>
                    <p className={styles.card_boxDescription_title}>The weight of things</p>
                    <p className={styles.card_boxDescription_author}>Marianne Fritz</p>
                    <div className={styles.card_boxDescription_boxRaiting}>
                        <div className={styles.boxRaiting_star}>star</div>
                        <p className={styles.boxRaiting_review}>353 reviews</p>
                    </div>
                </div>
            </td>
            <td>
                <div className={styles.card_boxButton}>
                    <button className={styles.card_boxButton_minus}>-</button>
                    <p className={styles.card_boxButton_count}>0</p>
                    <button className={styles.card_boxButton_plus}>+</button>
                </div>
            </td>
            <td className={styles.card_price}>$18.23</td>
            <td className={styles.card_delivery}>Shipping: delivery</td>
        </tr>
    );
};

export default CardBookBasket;
