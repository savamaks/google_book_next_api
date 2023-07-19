import Link from "next/link";
import style from "./Navigation.module.scss";
import { SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategoriesBook, changeCountPage, changeStateBoolean } from "../Reducer/sliceBookApi";
import { useAppSelector } from "../Reducer/store";
import { fetchBook } from "../RequestApi/RequestApi";
import { removeAllBook } from "../Reducer/sliceBookApi";
type ArrType ={
    name: string,
    url: string,
}
const Navigation = (): JSX.Element => {
    const [active, setActive] = useState<any>("");
    const dispatch = useDispatch();
    const { categoriesBook,firstLoading } = useAppSelector((state) => state.booksApiSlice);

    const arr:Array<ArrType> = [
        {
            name: "Architecture",
            url: "Architecture",
        },
        {
            name: "Art & Fashion",
            url: "Art",
        },
        {
            name: "Biography",
            url: "Biography & Autobiography",
        },
        {
            name: "Business",
            url: "Business",
        },
        {
            name: "Crafts & Hobbies",
            url: "Crafts & Hobbies",
        },
        {
            name: "Drama",
            url: "Drama",
        },
        {
            name: "Fiction",
            url: "Fiction",
        },
        {
            name: "Food & Drink",
            url: "Cooking",
        },
        {
            name: "Health & Wellbeing",
            url: "Health & Fitness",
        },
        {
            name: "History & Politics",
            url: "History",
        },
        {
            name: "Humor",
            url: "Humor",
        },
        {
            name: "Poetry",
            url: "Poetry",
        },
        {
            name: "Psychology",
            url: "Psychology",
        },
        {
            name: "Science",
            url: "Science",
        },
        {
            name: "Technology",
            url: "Technology",
        },
        {
            name: "Travel & Maps",
            url: "Travel",
        },
    ];
    const clickItem = (e: any) => {
        e.preventDefault();
        if (e.target.innerText !== categoriesBook) {
            if(firstLoading){
                dispatch(changeStateBoolean('firstLoading'))
            }
           
            dispatch(removeAllBook());
            dispatch(changeCategoriesBook(e.target.innerText));
            dispatch(fetchBook({ subject: e.target.innerText, page: 1, maxResult: 6 }));
            dispatch(changeCountPage(1))
            if (active !== "") {
                active.classList.remove(style.active);
            }
            e.target.classList.toggle(style.active);

            setActive(e.target);
        }
    };

    return (
        <div className={style.container}>
            <ul className={style.list}>
                {arr.map((el: ArrType, index: number) => {
                    return (
                        <li onClick={clickItem} key={index} className={`${style.item} ${categoriesBook === el.name ? style.active : ""}`}>
                            {el.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Navigation;
