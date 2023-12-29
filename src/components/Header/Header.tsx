import Image from "next/image";
import Link from "next/link";
import user from "../../../public/team/user.svg";
import bag from "../../../public/team/shop bag.svg";
import style from "./Header.module.scss";
import { SyntheticEvent, useEffect, useState } from "react";
import AuthProfile from "../AuthProfile/AuthProfile";
import { useDispatch, useSelector } from "react-redux";
import { statePositionAuthProfile, changeStateBoolean, changeCountBookBasket } from "../Reducer/sliceBookApi";
import { useAppSelector } from "../Reducer/store";
import { selectors } from "../Reducer/sliceBookBasket";


const Header = (): JSX.Element => {
    const dispatch = useDispatch();
    const { logIn, click, countBookBasket } = useAppSelector((state) => state.booksApiSlice);
    let positionX:number = 0
    const books = useSelector(selectors.selectAll);
    //колличество книг в корзине
    useEffect(() => {
        let count = 0;
        books.map((el: any) => {
            count = count + el.count;
        });
        dispatch(changeCountBookBasket(count));
    });

    const clickUserProfile = (e:any) => {
       
            if(e.target.parentElement.parentElement.clientWidth>=1440){
                positionX =  1190
            } else{
                positionX = e.clientX
            }
            const position:Array<number> = [positionX, e.clientY];
            dispatch(statePositionAuthProfile(position));
            dispatch(changeStateBoolean("click"));
        
        
    };

    // const log = () => {
    //     dispatch(changeStateBoolean("logIn"));
    // };

    return (
        <div className={style.container}>
            <Link href={"/"}>
                <h1 className={style.title}>Bookshop</h1>
            </Link>
            <div className={style.box}>
                <Link href={"/books"}>
                    <p className={style.text}>books</p>
                </Link>
                <Link href={"/audiobooks"}>
                    <p className={style.text}>audiobooks</p>
                </Link>
                <Link href={"/Stationery&gifts"}>
                    <p className={style.text}>Stationery & gifts</p>
                </Link>
                <Link href={"/blog"}>
                    <p className={style.text}>blog</p>
                </Link>
            </div>
            <div className={style.box}>
                {logIn ? (
                    <Link href={"/user"}>
                        <Image src={user} alt="user" />
                    </Link>
                ) : (
                    <Image style={{ cursor: "pointer" }} onClick={clickUserProfile} src={user} alt="user" />
                )}
                <Link className={style.basket} href={"/basket"}>
                    <Image src={bag} alt="basket" />
                    {countBookBasket !== 0 ? <div className={style.basket_count}>{countBookBasket}</div> : ""}
                </Link>
                {!logIn && click && <AuthProfile  />}
            </div>
        </div>
    );
};
export default Header;
