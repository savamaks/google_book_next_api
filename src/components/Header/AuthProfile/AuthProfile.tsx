import React, { useState } from "react";
import style from "./AuthProfile.module.scss";
import emailValidate from "@/components/func/exportFunc";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/components/Reducer/store";

export const requstUserData = async (params: any, setFlag: any) => {
    try {
        const res = await fetch("http://localhost:3000/api/auth?", {
            method: "POST",
            body: params,
        });
        if (res.ok) {
            const data = await res.json();
            setFlag(data);
        } else if (res.status === 400) {
            setFlag("error");
        }
    } catch (error) {
        console.log("error");
    }
};

const AuthProfile = ({log}:any) => {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [correctPassword, setCorrectPassword] = useState({ email: false, password: false });
    const {positionAuthProfile}= useAppSelector(state=>state.reducer)

    const changeInputEmail = (e: any) => {
        e.preventDefault();

        const validate = emailValidate(e.target.value);
        if (validate && inputPassword.length === 6) {
            setCorrectPassword((prev) => {
                return {
                    ...prev,
                    email: true,
                };
            });
        }
        setInputEmail(e.target.value);
    };
    const changeInputPassword = (e: any) => {
        e.preventDefault();
        setInputPassword(e.target.value);
        if (inputPassword.length === 6) {
            setCorrectPassword((prev) => {
                return {
                    ...prev,
                    password: true,
                };
            });
        }
    };
    const sendLoginPassword = (e: any) => {
        e.preventDefault();
        if (!correctPassword.email && !correctPassword.password) return;

        const params = new URLSearchParams();
        params.set("email", inputEmail);
        params.set("password", inputPassword);

        setInputEmail("");
        setInputPassword("");
        setCorrectPassword((prev) => {
            return {
                ...prev,
                password: false,
            };
        });
        requstUserData(params, setFlag);
        log(true)
    };
    return (
        <div  style={{top:`${40+positionAuthProfile.y}px`, left:`${positionAuthProfile.x-100}px`}} className={style.container}>
            <h2 className={style.container_title}>Log in</h2>
            <form className={style.container_form} action="">
                <label className={style.container_form_name}>Email</label>
                <input onChange={changeInputEmail} value={inputEmail} className={style.container_form_input} type="text" placeholder="email..." />

                <label className={style.container_form_name}>Password</label>
                <input
                    onChange={changeInputPassword}
                    value={inputPassword}
                    type="password"
                    className={style.container_form_input}
                    placeholder="password..."
                />

                {!correctPassword.password && <p className={style.container_form_error}>"Your password must be at least 6 characters long"</p>}
                <button onClick={sendLoginPassword} className={style.container_form_button}>
                    LOG IN
                </button>
            </form>
        </div>
    );
};

export default AuthProfile;
