import React, { ChangeEvent, useEffect, useState } from "react";
import style from "./AuthProfile.module.scss";
import emailValidate from "@/components/func/exportFunc";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "@/components/Reducer/store";
import { changeStateBoolean } from "@/components/Reducer/sliceBookApi";
import { useRouter } from "next/router";

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
            const data = await res.json();
            setFlag(data);
        }
    } catch (error) {
        console.log("error");
    }
};

const AuthProfile = () => {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [flag, setFlag] = useState({ success: false, error: false, message: "" });
    const [correctPassword, setCorrectPassword] = useState({ email: false, password: false });
    const { positionAuthProfile, logIn } = useAppSelector((state) => state.booksApiSlice);
    const dispatch = useDispatch();
    const router = useRouter();

    const passwordCheck = (password: string) => {
        if (password.length >= 6) {
            return true;
        } else {
            return false;
        }
    };

    const changeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const validate = emailValidate(e.target.value);
        if (validate) {
            setCorrectPassword((prev) => {
                return {
                    ...prev,
                    email: true,
                };
            });
        }
        setInputEmail(e.target.value);
    };

    const changeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputPassword(e.target.value);

        if (passwordCheck(e.target.value)) {
            setCorrectPassword((prev) => {
                return {
                    ...prev,
                    password: true,
                };
            });
        } else {
            setCorrectPassword((prev) => {
                return {
                    ...prev,
                    password: false,
                };
            });
        }
    };
    const sendLoginPassword = (e: any) => {
        e.preventDefault();
        console.log(correctPassword);
        if (correctPassword.email && correctPassword.password) {
            const params = new URLSearchParams();
            params.set("email", inputEmail);
            params.set("password", inputPassword);

            requstUserData(params, setFlag);
            setCorrectPassword((prev) => {
                return {
                    email: false,
                    password: false,
                };
            });
            setInputEmail("");
            setInputPassword("");
        }
    };

    const clickWindowAuth = (e:any) => {
        if (e.target.attributes["data-title"]?.textContent === "modal") {
            dispatch(changeStateBoolean("click"));
        }
    };
    useEffect(() => {
        if (flag.success===true) {
            dispatch(changeStateBoolean("logIn"));

            router.push("/user");
        }
    }, [flag]);
    return (
        <div className={style.modal} data-title="modal" onClick={clickWindowAuth}>
            <div style={{ top: `${40 + positionAuthProfile.y}px`, left: `${positionAuthProfile.x - 100}px` }} className={style.container}>
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
                        style={{ border: `${!correctPassword.password ? "  #FF353A 1px solid" : "#4c3db2 1px solid"}` }}
                    />
                </form>
                {/* {!correctPassword.password ? <p className={style.error}>"Your password must be at least 6 characters long"</p> : <p className={style.error}></p>} */}

                <button onClick={sendLoginPassword} className={style.container_form_button}>
                    LOG IN
                </button>
            </div>
        </div>
    );
};

export default AuthProfile;