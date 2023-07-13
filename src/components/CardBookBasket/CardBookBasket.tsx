import styles from "./CardBookBasket.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { bookAdded, bookRemove } from "../Reducer/sliceBookBasket";
import { validateSrc } from "../func/exportFunc";
import { BookType, CardBookBasketType, srcType } from "@/type";

const CardBookBasket = ({ book }: CardBookBasketType) => {

    const dispatch = useDispatch();
    const srcImage: string = validateSrc(book.volumeInfo.imageLinks);

    const imageLoader = ({ src }: srcType) => {
        return `${src}`;
    };
    const plusCount = () => {
        let bookBasket = {
            ...book,
            count: book.count + 1,
        };
        dispatch(bookAdded(bookBasket));
    };
    const minusCount = () => {
        if (book.count > 1) {
            let bookBasket = {
                ...book,
                count: book.count - 1,   
            }
            dispatch(bookAdded(bookBasket));
        }
        if (book.count === 1) {
            let bookBasket = {
                ...book,
                buy:false   
            }
            dispatch(bookAdded(bookBasket));

            dispatch(bookRemove(book.id));
        }
    };
    let sale = book.saleInfo.saleability.split("_").join(" ");

    return (
        <tr className={styles.box}>
            <td className={styles.card}>
                <Image  unoptimized loader={imageLoader} className={styles.card_img} width={300} height={400} src={srcImage} alt="ava" />
                <div className={styles.card_boxDescription}>
                    <p className={styles.card_boxDescription_title}>{book.volumeInfo.title}</p>
                    <p className={styles.card_boxDescription_author}>{book.volumeInfo.authors?.join(", ")}</p>
                    <div className={styles.card_boxDescription_boxRaiting}>
                        <div className={styles.boxRaiting_star}>{book.volumeInfo.averageRating}</div>
                        <p className={styles.boxRaiting_review}>{book.volumeInfo.raitingCount ? book.volumeInfo.raitingCount + " rewiew" : ""}</p>
                    </div>
                </div>
            </td>
            <td>
                <div className={styles.card_boxButton}>
                    <button className={styles.card_boxButton_minus} onClick={minusCount}>
                        -
                    </button>
                    <p className={styles.card_boxButton_count}>{book.count}</p>
                    <button className={styles.card_boxButton_plus} onClick={plusCount}>
                        +
                    </button>
                </div>
            </td>
            <td className={styles.card_price}>
                {" "}
                {book.saleInfo.listPrice ? Math.round(book.saleInfo.listPrice?.amount) : sale} {book.saleInfo.listPrice?.currencyCode}
            </td>
            <td className={styles.card_delivery}>Shipping: delivery</td>
        </tr>
    );
};

export default CardBookBasket;
