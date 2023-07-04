import Link from "next/link";
import style from "./Navigation.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategoriesBook } from "../Reducer/slice";
import { useAppSelector } from "../Reducer/store";

const Navigation = (): JSX.Element => {
    const [active, setActive] = useState("");
    const dispatch = useDispatch();
    const { categoriesBook } = useAppSelector((state) => state.reducer);
    const arr = [
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
        dispatch(changeCategoriesBook(e.target.innerText));

        // console.log(e.target.innerText);
        if (active !== "") {
            active.classList.remove(style.active);
        }
        e.target.classList.toggle(style.active);

        setActive(e.target);
    };

    // const r = `${style.item} ${style.active}`;

    return (
        <div className={style.container}>
            <ul className={style.list}>
                {arr.map((el: any,index:number) => {
                    return (
                        <li onClick={clickItem} key={index} className={`${style.item} ${categoriesBook===el.name? style.active:''}`}>
                            {el.name}
                        </li>
                    );
                })}
                {/* <li onClick={clickItem} title={"Architecture"} className={`${style.item} ${style.active}`}>
                    Architecture
                </li>
                <li onClick={clickItem} className={style.item}>
                    Art & Fashion
                </li>
                <li onClick={clickItem} className={style.item}>
                    Biography
                </li>
                <li onClick={clickItem} className={style.item}>
                    Business
                </li>
                <li onClick={clickItem} className={style.item}>
                    Crafts & Hobbies
                </li>
                <li onClick={clickItem} className={style.item}>
                    Drama
                </li>
                <li onClick={clickItem} className={style.item}>
                    Fiction
                </li>
                <li onClick={clickItem} className={style.item}>
                    Food & Drink
                </li>
                <li onClick={clickItem} className={style.item}>
                    Health & Wellbeing
                </li>
                <li onClick={clickItem} className={style.item}>
                    History & Politics
                </li>
                <li onClick={clickItem} className={style.item}>
                    Humor
                </li>
                <li onClick={clickItem} className={style.item}>
                    Poetry
                </li>
                <li onClick={clickItem} className={style.item}>
                    Psychology
                </li>
                <li onClick={clickItem} className={style.item}>
                    Science
                </li>
                <li onClick={clickItem} className={style.item}>
                    Technology
                </li>
                <li onClick={clickItem} className={style.item}>
                    Travel & Maps
                </li> */}
            </ul>
        </div>
    );
};
export default Navigation;
