import Image from "next/image";
import Link from "next/link";
import user from "../../../public/team/user.svg";
import bag from "../../../public/team/shop bag.svg";
import style from "./Header.module.scss";
import { useState } from "react";
import AuthProfile from "./AuthProfile/AuthProfile";
import { useDispatch, useSelector } from "react-redux";
import {  statePositionAuthProfile, changeStateBoolean } from "../Reducer/slice";
import { useAppSelector } from "../Reducer/store";

const Header = (): JSX.Element => {
    const dispatch = useDispatch();

    const { logIn, click } = useAppSelector((state) => state.reducer);

    const clickUserProfile = (e: any) => {
        const position: Array<number> = [e.clientX, e.clientY];
        dispatch(statePositionAuthProfile(position));

        dispatch(changeStateBoolean("click"));
    };

    const log = (value: boolean) => {
        dispatch(changeStateBoolean("logIn"));
    };

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
                <Link href={"/basket"}>
                    <Image src={bag} alt="basket" />
                </Link>
            </div>
            {!logIn && click && <AuthProfile log={log} />}
        </div>
    );
};
export default Header;
